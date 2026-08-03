import type { PropsFor, SimpleStyleFunction } from "../style/index.mjs";
export declare const displayPrint: import("../index.mjs").StyleFunction<{
  displayPrint?: unknown;
} & {
  theme?: object | undefined;
}> & {
  filterProps: string[];
  propTypes: any;
};
export declare const displayRaw: import("../index.mjs").StyleFunction<{
  display?: unknown;
} & {
  theme?: object | undefined;
}> & {
  filterProps: string[];
  propTypes: any;
};
export declare const overflow: import("../index.mjs").StyleFunction<{
  overflow?: unknown;
} & {
  theme?: object | undefined;
}> & {
  filterProps: string[];
  propTypes: any;
};
export declare const textOverflow: import("../index.mjs").StyleFunction<{
  textOverflow?: unknown;
} & {
  theme?: object | undefined;
}> & {
  filterProps: string[];
  propTypes: any;
};
export declare const visibility: import("../index.mjs").StyleFunction<{
  visibility?: unknown;
} & {
  theme?: object | undefined;
}> & {
  filterProps: string[];
  propTypes: any;
};
export declare const whiteSpace: import("../index.mjs").StyleFunction<{
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