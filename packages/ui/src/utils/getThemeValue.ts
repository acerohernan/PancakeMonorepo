import { get } from "lodash";
import { DefaultTheme } from "styled-components";

const getThemeValue =
  (path: string, fallback?: string | number) =>
  (theme: DefaultTheme): string =>
    String(get(theme, path, fallback));

export default getThemeValue;
