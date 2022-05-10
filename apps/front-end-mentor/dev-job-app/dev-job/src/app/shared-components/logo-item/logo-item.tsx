import React from "react";
import { Wrapper } from "./logo-item.styles";

interface IProps {
  logo: string;
  company: string;
  background: string;
  expandable?: boolean;
}

export const LogoItem: React.FC<IProps> = ({
  company,
  logo,
  background,
  expandable,
}) => {
  return (
    <Wrapper background={background} expandable={expandable}>
      <img src={logo} alt={`${company} logo`} />
    </Wrapper>
  );
};
