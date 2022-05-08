import React from "react";
import { useLocation } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa";
import { Wrapper } from "./header.styles";
import { StyledLinkButton } from "../../../../components/button";
import { Wrapper as StyledLink } from "../../../../components/styled-link/styled-link.styles";

export const Header = () => {
  const { pathname } = useLocation();
  const id = pathname.split("/");

  return (
    <Wrapper>
      <StyledLink to="/">
        <span className="icon-wrapper">
          <FaAngleLeft color="#647196" />
        </span>
        Go Back
      </StyledLink>

      <StyledLinkButton
        to={`/edit/${id[id.length - 1]}`}
        state={{ from: pathname }}
        variant="secondary"
      >
        Edit Feedback
      </StyledLinkButton>
    </Wrapper>
  );
};
