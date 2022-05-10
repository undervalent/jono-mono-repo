import React from "react";
import { Wrapper, Link } from "./button.styles";

interface IButtonProps {
  label?: string;
  width?: number;
  href?: string;
  purpose: "primary" | "secondary";
  children: React.ReactNode;
}

export const Button: React.FC<IButtonProps> = ({
  // label,
  children,
  purpose,
  width,
  href,
}) => {
  if (href) {
    return (
      <Link purpose={purpose} width={width} href={href} target="_blank">
        {children}
      </Link>
    );
  }
  return (
    <Wrapper purpose={purpose} width={width}>
      {children}
    </Wrapper>
  );
};
