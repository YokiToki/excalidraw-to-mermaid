export type ValueOf<T> = T[keyof T];

export declare const FONT_FAMILY: {
  Virgil: number;
  Helvetica: number;
  Cascadia: number;
  Assistant: number;
};

export declare const ROUNDNESS: {
  readonly LEGACY: 1;
  readonly PROPORTIONAL_RADIUS: 2;
  readonly ADAPTIVE_RADIUS: 3;
};

export declare const TEXT_ALIGN: {
  LEFT: string;
  CENTER: string;
  RIGHT: string;
};

export declare const VERTICAL_ALIGN: {
  TOP: string;
  MIDDLE: string;
  BOTTOM: string;
};

export type GroupId = string;
export type FillStyle = "hachure" | "cross-hatch" | "solid" | "zigzag";
export type RoundnessType = ValueOf<typeof ROUNDNESS>;
export type StrokeStyle = "solid" | "dashed" | "dotted";
export type FontFamilyKeys = keyof typeof FONT_FAMILY;
export type FontFamilyValues = typeof FONT_FAMILY[FontFamilyKeys];
export type TextAlign = typeof TEXT_ALIGN[keyof typeof TEXT_ALIGN];
type VerticalAlignKeys = keyof typeof VERTICAL_ALIGN;
export type VerticalAlign = typeof VERTICAL_ALIGN[VerticalAlignKeys];
export type Arrowhead = "arrow" | "bar" | "dot" | "triangle";

type _ExcalidrawElementBase = Readonly<{
  id: string;
  x: number;
  y: number;
  strokeColor: string;
  backgroundColor: string;
  fillStyle: FillStyle;
  strokeWidth: number;
  strokeStyle: StrokeStyle;
  roundness: null | {
    type: RoundnessType;
    value?: number;
  };
  roughness: number;
  opacity: number;
  width: number;
  height: number;
  angle: number;
  /** Random integer used to seed shape generation so that the roughjs shape
   doesn't differ across renders. */
  seed: number;
  /** Integer that is sequentially incremented on each change. Used to reconcile
   elements during collaboration or when saving to server. */
  version: number;
  /** Random integer that is regenerated on each change.
   Used for deterministic reconciliation of updates during collaboration,
   in case the versions (see above) are identical. */
  versionNonce: number;
  isDeleted: boolean;
  /** List of groups the element belongs to.
   Ordered from deepest to shallowest. */
  groupIds: readonly GroupId[];
  frameId: string | null;
  /** other elements that are bound to this element */
  boundElements: readonly Readonly<{
    id: ExcalidrawLinearElement["id"];
    type: "arrow" | "text";
  }>[] | null;
  /** epoch (ms) timestamp of last element update */
  updated: number;
  link: string | null;
  locked: boolean;
  customData?: Record<string, unknown>;
}>;

export type ExcalidrawSelectionElement = _ExcalidrawElementBase & {
  type: "selection";
};
export type ExcalidrawRectangleElement = _ExcalidrawElementBase & {
  type: "rectangle";
};
export type ExcalidrawDiamondElement = _ExcalidrawElementBase & {
  type: "diamond";
};
export type ExcalidrawEllipseElement = _ExcalidrawElementBase & {
  type: "ellipse";
};

export type ExcalidrawGenericElement =
  ExcalidrawSelectionElement
  | ExcalidrawRectangleElement
  | ExcalidrawDiamondElement
  | ExcalidrawEllipseElement;

export type ExcalidrawTextElement = _ExcalidrawElementBase & Readonly<{
  type: "text";
  fontSize: number;
  fontFamily: FontFamilyValues;
  text: string;
  baseline: number;
  textAlign: TextAlign;
  verticalAlign: VerticalAlign;
  containerId: ExcalidrawGenericElement["id"] | null;
  originalText: string;
  /**
   * Unitless line height (aligned to W3C). To get line height in px, multiply
   *  with font size (using `getLineHeightInPx` helper).
   */
  lineHeight: number & {
    _brand: "unitlessLineHeight";
  };
}>;

export type ExcalidrawBindableElement = ExcalidrawRectangleElement | ExcalidrawDiamondElement | ExcalidrawEllipseElement | ExcalidrawTextElement;

export type PointBinding = {
  elementId: ExcalidrawBindableElement["id"];
  focus: number;
  gap: number;
};

export type ExcalidrawLinearElement = _ExcalidrawElementBase & Readonly<{
  type: "line" | "arrow";
  startBinding: PointBinding | null;
  endBinding: PointBinding | null;
  startArrowhead: Arrowhead | null;
  endArrowhead: Arrowhead | null;
}>;

export type ExcalidrawElement =
  ExcalidrawGenericElement
  | ExcalidrawTextElement
  | ExcalidrawLinearElement;

export type ExcalidrawJson = {
  type: 'excalidraw',
  version: number,
  source: string,
  elements: readonly ExcalidrawElement[];
} & Record<string, unknown>;
