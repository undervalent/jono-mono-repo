import React from "react";
import { HiPlus } from "react-icons/hi";
import { useRecoilValue } from "recoil";
import { Wrapper } from "./request-header.styles";
import { filteredRequests } from "../../../../state";
import suggestionsIcon from "../../../../assets/suggestions/icon-suggestions.svg";
import { Dropdown } from "../../../../components/dropdowns";
import { useDevice } from "../../../../lib/hooks";
import { StyledLinkButton } from "../../../../components/button";

import {
  RequestInfo,
  RequestIcon,
  RequestHeadline,
} from "./request-header.styles";

export const RequestHeader = () => {
  const list = useRecoilValue(filteredRequests);
  const device = useDevice();

  return (
    <Wrapper>
      {device !== "mobile" && (
        <RequestInfo>
          <RequestIcon src={suggestionsIcon} alt="suggestions" />
          <RequestHeadline>{list.length} Suggestions</RequestHeadline>
        </RequestInfo>
      )}
      <Dropdown />
      <StyledLinkButton variant="primary" to="/create" state={{ from: "/" }}>
        <HiPlus />
        Add Feedback
      </StyledLinkButton>
    </Wrapper>
  );
};
