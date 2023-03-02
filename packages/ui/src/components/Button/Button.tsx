import React, { cloneElement, ComponentProps, ElementType, isValidElement } from "react";
import getExternalLinkProps from "../../utils/getExternalLinkProps";
import StyledButton from "./StyledButton";
import { ButtonProps, scales, variants } from "./types";

const Button = <E extends ElementType = "button">(props: ButtonProps<E>): JSX.Element => {
  const { startIcon, endIcon, external, className, isLoading, disabled, children, ...rest } = props;
  const internalProps = external ? getExternalLinkProps() : {};
  const isDisabled = Boolean(isLoading || disabled);
  const classNames: Array<string> = className ? [className] : [];

  if (isLoading) {
    classNames.push("pancake-button--loading");
  }

  if (isDisabled && !isLoading) {
    classNames.push("pancake-button--disabled");
  }

  return (
    <StyledButton
      $isLoading={isLoading}
      className={classNames.join(" ")}
      disabled={isDisabled}
      {...internalProps}
      {...rest}
    >
      <>
        {isValidElement(startIcon) &&
          cloneElement(startIcon, {
            mr: "0.5rem",
          } as { mr: string })}
        {children}
        {isValidElement(endIcon) &&
          cloneElement(endIcon, {
            ml: "0.5rem",
          } as { ml: string })}
      </>
    </StyledButton>
  );
};

Button.defaultProps = {
  isLoading: false,
  external: false,
  variant: variants.PRIMARY,
  scale: scales.MD,
  disabled: false,
} as ComponentProps<typeof Button>;

export default Button;
