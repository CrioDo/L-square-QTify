import type { StyleFunction } from "../style/index.mjs";
type ComposedArg<T> = T extends Array<(arg: infer P) => any> ? P : never;
type ComposedOwnerState<T> = ComposedArg<T>;
export type ComposedStyleFunction<T extends Array<StyleFunction<any>>> = StyleFunction<ComposedOwnerState<T>> & {
  filterProps: string[];
};
declare function compose<T extends Array<StyleFunction<any>>>(...styles: T): ComposedStyleFunction<T>;
export default compose;