import React from "react";
import { Wrapper } from "./dropdown.styles";

interface IDropdownProps {
  children: React.ReactNode;
}

export const Dropdown: React.FC<IDropdownProps> = ({ children }) => {
  return (
    <Wrapper>
      <button>TRIGGER</button>

      <div className="dropdown__content">{children}</div>
    </Wrapper>
  );
};
