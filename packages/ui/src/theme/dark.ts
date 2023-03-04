import { DefaultTheme } from "styled-components";
import base from "./base";
import { darkColors } from "./colors";
import { dark as darkModal } from "../widgets/Modal/theme";
import { dark as darkPancakeToggle } from "../components/PancakeToggle/theme";

const darkTheme: DefaultTheme = {
  ...base,
  isDark: true,
  colors: darkColors,
  modal: darkModal,
  pancakeToggle: darkPancakeToggle,
};

export default darkTheme;
