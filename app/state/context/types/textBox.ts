export type TextBoxType = {
  type: string;
  version: string;
  originX: string;
  originY: string;
  left: number;
  top: number;
  width: number;
  height: number;
  fill: string;
  stroke: string | null;
  strokeWidth: number;
  strokeDashArray: string | null;
  strokeLineCap: string;
  strokeDashOffset: number;
  strokeLineJoin: string;
  strokeUniform: boolean;
  strokeMiterLimit: number;
  scaleX: number;
  scaleY: number;
  angle: number;
  flipX: boolean;
  flipY: boolean;
  opacity: number;
  shadow: string | null;
  visible: boolean;
  backgroundColor: string;
  fillRule: string;
  paintFirst: string;
  globalCompositeOperation: string;
  skewX: number;
  skewY: number;
  fontFamily: string;
  fontWeight: string;
  fontSize: number;
  text: string;
  underline: boolean;
  overline: boolean;
  linethrough: boolean;
  textAlign: string;
  fontStyle: string;
  lineHeight: number;
  textBackgroundColor: string;
  charSpacing: number;
  styles: any[];
  direction: string;
  path: string | null;
  pathStartOffset: number;
  pathSide: string;
  pathAlign: string;
  minWidth: number;
  splitByGrapheme: boolean;
};