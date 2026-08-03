import type { PropsFor, SimpleStyleFunction } from "../style/index.js";
export declare const displayPrint: import("../index.js").StyleFunction<{
  displayPrint?: unknown;
} & {
  theme?: object | undefined;
}> & {
  filterProps: string[];
  propTypes: any;
};
export declare const displayRaw: import("../index.js").StyleFunction<{
  display?: unknown;
} & {
  theme?: object | undefined;
}> & {
  filterProps: string[];
  propTypes: any;
};
export declare const overflow: import("../index.js").StyleFunction<{
  overflow?: unknown;
} & {
  theme?: object | undefined;
}> & {
  filterProps: string[];
  propTypes: any;
};
export declare const textOverflow: import("../index.js").StyleFunction<{
  textOverflow?: unknown;
} & {
  theme?: object | undefined;
}> & {
  filterProps: string[];
  propTypes: any;
};
export declare const visibility: import("../index.js").StyleFunction<{
  visibility?: unknown;
} & {
  theme?: object | undefined;
}> & {
  filterProps: string[];
  propTypes: any;
};
export declare const whiteSpace: import("../index.js").StyleFunction<{
  whiteSpace?: unknown;
} & {
  theme?: object | undefined;
}> & {
  filterProps: string[];
  propTypes: any;
};
declare const display: SimpleStyleFunction<'display' | 'displayPrint' | 'overflow' | 'textOverflow' | 'visibility' | 'whiteSpace'>;
export type DisplayProps = PropsFor<typeof display>;
export default display;