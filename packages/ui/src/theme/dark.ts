import { DefaultTheme } from "styled-components";
import base from "./base";
import { darkColors } from "./colors";
import { dark as darkModal } from "../widgets/Modal/theme";

const darkTheme: DefaultTheme = {
  ...base,
  isDark: true,
  colors: darkColors,
  modal: darkModal,
};

export default darkTheme;
