import { DefaultTheme } from "styled-components";
import { light as lightModal } from "../widgets/Modal/theme";

import base from "./base";
import { lightColors } from "./colors";
import { light as lightPancakeToggle } from "../components/PancakeToggle/theme";

const lightTheme: DefaultTheme = {
  ...base,
  isDark: false,
  colors: lightColors,
  modal: lightModal,
  pancakeToggle: lightPancakeToggle,
};

export default lightTheme;
