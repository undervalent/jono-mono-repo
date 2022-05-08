import React from "react";
import { ButtonVariant } from "./types";
import { ButtonWrapper } from "./button.styles";
import { FaAngleLeft } from "react-icons/fa";
interface IProps {
  variant: ButtonVariant;
  icon?: boolean;
  onClick?(): void;
  children: React.ReactNode;
}
const getIconColor = (variant: ButtonVariant) =>
  variant === "solidback" ? "#f2f4ff" : "#647196";

export const Button: React.FC<IProps> = ({
  variant,
  children,
  onClick,
  ...rest
}) => {
  const iconColor = getIconColor(variant);
  return (
    <ButtonWrapper variant={variant} onClick={onClick} {...rest}>
      {variant.includes("back") && <FaAngleLeft color={iconColor} />}
      {children}
    </ButtonWrapper>
  );
};
