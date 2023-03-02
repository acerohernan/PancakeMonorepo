import React from "react";
import StyledButton from "./StyledButton";

interface ButtonProps {
  label: string;
}

const Button: React.FC<ButtonProps> = ({ label }) => (
  <StyledButton type="button">{label}</StyledButton>
);

export default Button;
