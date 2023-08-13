import React from "react";
import * as Styled from "./job-list.styles";
import { FilterMenu } from "./components";
import { useAppSelector, useAppDispatch } from "../../state/hooks";
import { JobItem } from "./components/job-item";
import { ContentWrapper } from "../../lib/styles";
import {
  getFilteredJobList,
  updateShowCount,
} from "../../state/features/job-list";
import { Button } from "../../shared-components";
import { getDeviceSize } from "../../state/features/ui";
import { FilterMenuMobile } from "./components";

export const JobsList = () => {
  const filteredList = useAppSelector(getFilteredJobList);
  const dispatch = useAppDispatch();
  const updateCount = () => dispatch(updateShowCount());
  const deviceSize = useAppSelector(getDeviceSize);
  const renderList = filteredList.map((job) => {
    return job ? <JobItem key={job.id} jobData={job} /> : null;
  });

  return (
    <ContentWrapper>
      <Styled.Wrapper>
        {deviceSize === "small" ? <FilterMenuMobile /> : <FilterMenu />}
        <Styled.Listings>{renderList}</Styled.Listings>
      </Styled.Wrapper>
      <Styled.ButtonWrapper>
        <Button purpose="primary" width={141} onClick={updateCount}>
          Load more
        </Button>
      </Styled.ButtonWrapper>
    </ContentWrapper>
  );
};
