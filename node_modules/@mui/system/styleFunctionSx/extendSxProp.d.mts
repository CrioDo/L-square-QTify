import type { SxProps } from "./styleFunctionSx.mjs";
export default function extendSxProp<Props extends {
  sx?: SxProps<any> | undefined;
} = {
  sx?: SxProps<any> | undefined;
}>(props: Props): Props;