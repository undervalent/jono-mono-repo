import React from "react";
import { HiPlus } from "react-icons/hi";
import EmptyListGraphic from "../../../../../../assets/suggestions/illustration-empty.svg";
import { EmptyListWrapper } from "./empty-list.styles";
import { StyledLinkButton } from "../../../../../../components/button";

export const EmptyList = () => {
  return (
    <EmptyListWrapper>
      <img src={EmptyListGraphic} alt="empty list" />
      <h2>There is no feedback yet.</h2>
      <p>
        Got a suggestion? Found a bug that needs to be squashed? We love hearing
        about new ideas to improve our app.
      </p>
      <StyledLinkButton variant="primary" to="/create" state={{ from: "/" }}>
        <HiPlus />
        Add Feedback
      </StyledLinkButton>
    </EmptyListWrapper>
  );
};
