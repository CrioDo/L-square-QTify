'use client';

import getThemeProps from "./getThemeProps.mjs";
import useTheme from "../useTheme/index.mjs";
export default function useThemeProps(params) {
  const {
    props,
    name,
    defaultTheme,
    themeId
  } = params;
  let theme = useTheme(defaultTheme);
  if (themeId) {
    theme = theme[themeId] || theme;
  }
  return getThemeProps({
    theme,
    name,
    props
  });
}