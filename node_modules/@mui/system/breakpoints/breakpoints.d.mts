import type { CSSObject } from '@mui/styled-engine';
import type { Breakpoints } from "../createBreakpoints/createBreakpoints.mjs";
import type { Breakpoint, Theme } from "../createTheme/index.mjs";
import type { ResponsiveStyleValue } from "../styleFunctionSx/index.mjs";
import type { StyleFunction } from "../style/index.mjs";
export declare const DEFAULT_BREAKPOINTS: Breakpoints;
export declare function handleBreakpoints<Props>(props: Props, propValue: any, styleFromPropValue: (value: any, breakpoint?: Breakpoint) => any): any;
export declare function iterateBreakpoints(target: any, theme: Theme | undefined, propValue: any, callback: (mediaKey: string | undefined, value: any, initialKey?: string) => any): any;
type DefaultBreakPoints = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
declare function setupBreakpoints<Props, BreakpointsInput extends string = DefaultBreakPoints>(styleFunction: StyleFunction<Props>): StyleFunction<Partial<Record<BreakpointsInput, Props>> & Props>;
export declare function mergeBreakpointsInOrder(breakpoints: Breakpoints, ...styles: CSSObject[]): CSSObject;
export interface ResolveBreakpointValuesOptions<T> {
  values: ResponsiveStyleValue<T>;
  breakpoints?: Breakpoints['values'] | undefined;
  base?: Record<string, boolean> | undefined;
}
export declare function resolveBreakpointValues<T>(options: ResolveBreakpointValuesOptions<T>): Record<string, T>;
export declare function hasBreakpoint(breakpoints: Breakpoints, value: any): boolean;
export default setupBreakpoints;