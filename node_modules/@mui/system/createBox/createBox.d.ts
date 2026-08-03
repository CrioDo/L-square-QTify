import type { OverridableComponent } from '@mui/types';
import type { BoxTypeMap } from "../Box/index.js";
import type { Theme as SystemTheme } from "../createTheme/index.js";
export default function createBox<T extends object = SystemTheme, AdditionalProps extends Record<string, unknown> = {}>(options?: {
  themeId?: string | undefined;
  defaultTheme?: T | undefined;
  defaultClassName?: string | undefined;
  generateClassName?: ((componentName: string) => string) | undefined;
}): OverridableComponent<BoxTypeMap<AdditionalProps, 'div', T>>;