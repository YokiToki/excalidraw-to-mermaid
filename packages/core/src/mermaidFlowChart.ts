export type MermaidNodeType = 'rectangle' | 'rectangle_rounded' | 'diamond' | 'ellipse';
export type MermaidFlowChartDirection = 'TB' | 'TD' | 'BT' | 'RL' | 'LR';

export class MermaidFlowChart {
  constructor(
    private direction: MermaidFlowChartDirection,
    private lines: MermaidFlowChartLine[]
  ) {
  }

  toString(): string {
    return `flowchart ${this.direction}
  \t${this.lines.join(`\n\t`)}`
  }
}

export class MermaidFlowChartLine {
  private static RECTANGLE_TEMPLATE = '[%s]';
  private static RECTANGLE_ROUND_TEMPLATE = '(%s)';
  private static DIAMOND_TEMPLATE = '{%s}';
  private static ELLIPSE_TEMPLATE = '([%s])';
  private static OVER_TEXT_TEMPLATE = '|%s| ';

  constructor(
    private startElName: string,
    private endElName: string,
    private startElType: MermaidNodeType,
    private endElType: MermaidNodeType,
    private startElText?: string,
    private endElText?: string,
    private overLineElText?: string,
  ) {
  }

  private toText(text: string, type: MermaidNodeType): string {
    const formattedText = text.replace('\n', '<br/>');

    return type === 'rectangle'
      ? MermaidFlowChartLine.RECTANGLE_TEMPLATE.replace('%s', formattedText)
      : type === 'rectangle_rounded'
        ? MermaidFlowChartLine.RECTANGLE_ROUND_TEMPLATE.replace('%s', formattedText)
        : type === 'diamond'
          ? MermaidFlowChartLine.DIAMOND_TEMPLATE.replace('%s', formattedText)
          : type === 'ellipse'
            ? MermaidFlowChartLine.ELLIPSE_TEMPLATE.replace('%s', formattedText)
            : '';
  }

  private toOverText(text: string | undefined): string {
    return text ? MermaidFlowChartLine.OVER_TEXT_TEMPLATE.replace('%s', text) : '';
  }

  toString(): string {
    if (!this.startElText || !this.endElText)
      return `${this.startElName} --> ${this.endElName}`;
    const startText = this.toText(this.startElText, this.startElType);
    const endText = this.toText(this.endElText, this.endElType);
    const overText = this.toOverText(this.overLineElText);

    return `${this.startElName}${startText} --> ${overText}${this.endElName}${endText}`;
  }
}
