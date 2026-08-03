import type { Theme } from "../createTheme/index.js";
export declare const systemDefaultTheme: Theme;
declare function useTheme<T = Theme>(defaultTheme?: T): T;
export default useTheme;