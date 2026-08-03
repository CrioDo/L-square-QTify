import type { PropsFor, SimpleStyleFunction } from "../style/index.mjs";
export declare const position: import("../index.mjs").StyleFunction<{
  position?: unknown;
} & {
  theme?: object | undefined;
}> & {
  filterProps: string[];
  propTypes: any;
};
export declare const zIndex: import("../index.mjs").StyleFunction<{
  zIndex?: unknown;
} & {
  theme?: object | undefined;
}> & {
  filterProps: string[];
  propTypes: any;
};
export declare const top: import("../index.mjs").StyleFunction<{
  top?: unknown;
} & {
  theme?: object | undefined;
}> & {
  filterProps: string[];
  propTypes: any;
};
export declare const right: import("../index.mjs").StyleFunction<{
  right?: unknown;
} & {
  theme?: object | undefined;
}> & {
  filterProps: string[];
  propTypes: any;
};
export declare const bottom: import("../index.mjs").StyleFunction<{
  bottom?: unknown;
} & {
  theme?: object | undefined;
}> & {
  filterProps: string[];
  propTypes: any;
};
export declare const left: import("../index.mjs").StyleFunction<{
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