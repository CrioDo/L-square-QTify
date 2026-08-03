import type { PropsFor, SimpleStyleFunction } from "../style/index.js";
export declare const color: SimpleStyleFunction<'color'>;
export declare const bgcolor: SimpleStyleFunction<'bgcolor'>;
export declare const backgroundColor: SimpleStyleFunction<'backgroundColor'>;
declare const palette: SimpleStyleFunction<'bgcolor' | 'color'>;
export type PaletteProps = PropsFor<typeof palette>;
export default palette;