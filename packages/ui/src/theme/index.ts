import { PancakeToggleTheme } from "../components/PancakeToggle/types";
import { ModalTheme } from "../widgets/Modal/types";
import { Breackpoints, Colors, MediaQueries, Radii, Shadows, Spacing, ZIndices } from "./types";

export interface PancakeTheme {
  siteWidth: number;
  isDark: boolean;
  colors: Colors;
  breakpoints: Breackpoints;
  mediaQueries: MediaQueries;
  spacing: Spacing;
  shadows: Shadows;
  radii: Radii;
  zIndices: ZIndices;

  // Components
  pancakeToggle: PancakeToggleTheme;

  // Widgets
  modal: ModalTheme;
}

export { darkColors, lightColors } from "./colors";
export { default as dark } from "./dark";
export { default as light } from "./light";
export * from "./types";
