import React from "react";

import { FaAngleLeft } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { Wrapper } from "./styled-link.styles";

interface CustomState {
  from?: string;
}

export const StyledLink = () => {
  const location = useLocation();
  let output = "/";

  if (location && (location.state as CustomState)) {
    const { from } = location.state as CustomState;
    output = from || "/";
  }

  return (
    <Wrapper to={output}>
      <span className="icon-wrapper">
        <FaAngleLeft color="#647196" />
      </span>
      Go Back
    </Wrapper>
  );
};
