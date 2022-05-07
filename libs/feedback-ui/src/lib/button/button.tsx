import React from "react";
import { ButtonVariant } from "./button.types";
import { ButtonWrapper } from "./button.styles";
import { FaAngleLeft } from "react-icons/fa";

/* eslint-disable-next-line */
export interface ButtonProps {
  variant: ButtonVariant;
  icon?: boolean;
  onClick?(): void;
  children?: React.ReactNode;
}

const getIconColor = (variant: ButtonVariant) =>
  variant === "solidback" ? "#f2f4ff" : "#647196";
export function Button({ variant, children, onClick, ...rest }: ButtonProps) {
  const iconColor = getIconColor(variant);
  return (
    <ButtonWrapper variant={variant} onClick={onClick} {...rest}>
      {variant.includes("back") && <FaAngleLeft color={iconColor} />}
      {children}
    </ButtonWrapper>
  );
}

export default Button;
