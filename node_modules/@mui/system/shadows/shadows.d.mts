import type { PropsFor, SimpleStyleFunction } from "../style/index.mjs";
declare const boxShadow: SimpleStyleFunction<'boxShadow'>;
export type ShadowsProps = PropsFor<typeof boxShadow>;
export default boxShadow;