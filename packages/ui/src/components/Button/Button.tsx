import React from "react";
import styled from "styled-components";
// import StyledButton from "./StyledButton";

const ButtonStyled = styled.button`
  color: blue;
`;

interface ButtonProps {
  label: string;
}

const Button: React.FC<ButtonProps> = ({ label }) => (
  <ButtonStyled type="button">{label}</ButtonStyled>
);

export default Button;
