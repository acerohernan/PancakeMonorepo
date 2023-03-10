import styled, { DefaultTheme } from "styled-components";
import { layout, space, typography } from "styled-system";
import getThemeValue from "../../utils/getThemeValue";
import { TextProps } from "./types";

interface ThemedProps extends TextProps {
  theme: DefaultTheme;
}

const getColor = ({ theme, color }: ThemedProps) => getThemeValue(`colors.${color}`, color)(theme);

const getFontSize = ({ fontSize, small }: TextProps) => (small ? "14px" : fontSize || "16px");

const Text = styled.div<TextProps>`
  color: ${getColor};
  font-size: ${getFontSize};
  font-weight: ${({ bold }) => (bold ? 600 : 400)};
  line-height: 1.5;
  ${({ textTrasnform }) => textTrasnform && `text-transform: ${textTrasnform}`}
  ${({ ellipsis }) =>
    ellipsis &&
    `
  white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `}

  ${space}
  ${typography}
  ${layout}
`;

Text.defaultProps = {
  color: "text",
  small: false,
  ellipsis: false,
};

export default Text;
