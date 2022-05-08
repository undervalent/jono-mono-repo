import React from "react";
import { useLocation } from "react-router-dom";
import { HiPlus } from "react-icons/hi";

import { StyledLinkButton } from "../../../../components/button";
import { StyledLink } from "../../../../components/styled-link";

import { Wrapper, Headline, ContentWrapper } from "./header.styles";

export const Header = () => {
  const { pathname } = useLocation();

  return (
    <Wrapper>
      <ContentWrapper>
        <Headline>Roadmap</Headline>
        <StyledLink />
      </ContentWrapper>
      <StyledLinkButton
        variant="primary"
        to="/create"
        state={{ from: pathname }}
      >
        <HiPlus />
        Add Feedback
      </StyledLinkButton>
    </Wrapper>
  );
};
