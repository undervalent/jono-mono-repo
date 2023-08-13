import React from "react";
import { Wrapper } from "./dropdown.styles";

export const Dropdown: React.FC = ({ children }) => {
  return (
    <Wrapper>
      <button>TRIGGER</button>

      <div className="dropdown__content">{children}</div>
    </Wrapper>
  );
};
