import {
  ExcalidrawElement,
  ExcalidrawGenericElement,
  ExcalidrawJson,
  ExcalidrawLinearElement,
  ExcalidrawTextElement
} from "./types.js";
import {generate} from "random-words";
import {MermaidFlowChart, MermaidFlowChartDirection, MermaidFlowChartLine, MermaidNodeType} from "./mermaidFlowChart.js";

function notEmpty<T>(value: T | null | undefined): value is T {
  return value !== null && value !== undefined;
}

function isGenericElement(element: ExcalidrawElement): element is ExcalidrawGenericElement {
  return ['selection', 'rectangle', 'diamond', 'ellipse'].includes(element.type)
}

function isTextElement(element: ExcalidrawElement): element is ExcalidrawTextElement {
  return element.type === 'text'
}

function isLinearElement(element: ExcalidrawElement): element is ExcalidrawLinearElement {
  return ['line', 'arrow'].includes(element.type)
}

function generateElementNameMap(input: ExcalidrawJson): Map<string, string> {
  const words = generate({
    exactly: input.elements.length,
    seed: input.elements.map(el => el.id).join(''),
    formatter: (word) => word.toUpperCase(),
  });

  return new Map(input.elements.map((el, index) => [el.id, words[index]]));
}

function toMermaidNodeType(element: ExcalidrawGenericElement): MermaidNodeType {
  return element.type === 'rectangle'
    ? (element.roundness !== null ? 'rectangle_rounded' : 'rectangle')
    : element.type === 'diamond'
      ? 'diamond'
      : 'ellipse';
}

export function excalidrawV2ToMermaidFlowChart(direction: MermaidFlowChartDirection, input: ExcalidrawJson): string {
  const nameMap = generateElementNameMap(input);
  const genericElements = input.elements.filter(el => isGenericElement(el)) as ExcalidrawGenericElement[];
  const textElements = input.elements.filter(el => isTextElement(el)) as ExcalidrawTextElement[];
  const linearElements = input.elements.filter(el => isLinearElement(el) && el?.startBinding != null && el?.endBinding != null) as ExcalidrawLinearElement[];

  const mermaidFlowChartLines = linearElements.map(linearEl => {
    const startGenericEl = genericElements.find(el => el.id === linearEl.startBinding?.elementId);
    const endGenericEl = genericElements.find(el => el.id === linearEl.endBinding?.elementId);

    if (!startGenericEl || !endGenericEl) return null;

    const overLineTextElId = linearEl.boundElements?.find(el => el.type === "text")?.id;
    const startTextElId = startGenericEl.boundElements?.find(el => el.type === "text")?.id;
    const endTextElId = endGenericEl.boundElements?.find(el => el.type === "text")?.id;

    const overLineTextEl = textElements.find(el => el.id === overLineTextElId);
    const startTextEl = textElements.find(el => el.id === startTextElId);
    const endTextEl  = textElements.find(el => el.id === endTextElId);

    if (!startTextEl || !endTextEl) return null;

    const startElName = nameMap.get(startGenericEl.id)!;
    const endElName = nameMap.get(endGenericEl.id)!;

    return new MermaidFlowChartLine(
      startElName,
      endElName,
      toMermaidNodeType(startGenericEl),
      toMermaidNodeType(endGenericEl),
      startTextEl.text,
      endTextEl.text,
      overLineTextEl?.text
    )
  }).filter(notEmpty);

  const result = new MermaidFlowChart(direction, mermaidFlowChartLines);

  return result.toString();
}
