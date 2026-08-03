import type { PropsFor, SimpleStyleFunction } from "../style/index.js";
export declare const position: import("../index.js").StyleFunction<{
  position?: unknown;
} & {
  theme?: object | undefined;
}> & {
  filterProps: string[];
  propTypes: any;
};
export declare const zIndex: import("../index.js").StyleFunction<{
  zIndex?: unknown;
} & {
  theme?: object | undefined;
}> & {
  filterProps: string[];
  propTypes: any;
};
export declare const top: import("../index.js").StyleFunction<{
  top?: unknown;
} & {
  theme?: object | undefined;
}> & {
  filterProps: string[];
  propTypes: any;
};
export declare const right: import("../index.js").StyleFunction<{
  right?: unknown;
} & {
  theme?: object | undefined;
}> & {
  filterProps: string[];
  propTypes: any;
};
export declare const bottom: import("../index.js").StyleFunction<{
  bottom?: unknown;
} & {
  theme?: object | undefined;
}> & {
  filterProps: string[];
  propTypes: any;
};
export declare const left: import("../index.js").StyleFunction<{
  left?: unknown;
} & {
  theme?: object | undefined;
}> & {
  filterProps: string[];
  propTypes: any;
};
declare const positions: SimpleStyleFunction<'zIndex' | 'position' | 'top' | 'right' | 'bottom' | 'left'>;
export type PositionsProps = PropsFor<typeof positions>;
export default positions;