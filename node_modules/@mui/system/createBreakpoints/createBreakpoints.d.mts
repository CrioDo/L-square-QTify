import type { OverridableStringUnion } from '@mui/types';
export interface BreakpointOverrides {}
export type Breakpoint = OverridableStringUnion<'xs' | 'sm' | 'md' | 'lg' | 'xl', BreakpointOverrides>;
export declare const breakpointKeys: Breakpoint[];
export interface Breakpoints {
  keys: Breakpoint[];
  values: { [key in Breakpoint]: number };
  up: (key: Breakpoint | number) => string;
  down: (key: Breakpoint | number) => string;
  between: (start: Breakpoint | number, end: Breakpoint | number) => string;
  only: (key: Breakpoint) => string;
  not: (key: Breakpoint) => string;
  unit?: string | undefined;
  /**
   * @ignore - Do not document.
   */
  internal_mediaKeys: string[];
}
export interface BreakpointsOptions extends Partial<Breakpoints> {
  /**
   * The increment divided by 100 used to implement exclusive breakpoints.
   * For example, `step: 5` means that `down(500)` will result in `'(max-width: 499.95px)'`.
   * @default 5
   */
  step?: number | undefined;
  /**
   * The unit used for the breakpoint's values.
   * @default 'px'
   */
  unit?: string | undefined;
}
export default function createBreakpoints(breakpoints: BreakpointsOptions): Breakpoints;