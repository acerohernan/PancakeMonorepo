import styled from "styled-components";
import { flexbox, grid, gridGap } from "styled-system";
import Box from "./Box";
import { GridProps } from "./types";

const Grid = styled(Box)<GridProps>`
  display: grid;
  ${flexbox}
  ${grid}
  ${gridGap}
`;

export default Grid;
