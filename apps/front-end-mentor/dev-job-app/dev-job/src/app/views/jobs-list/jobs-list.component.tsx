import React from "react";
import { Wrapper } from "./job-list.styles";
import { FilterMenu } from "./components";
import { useAppSelector } from "../../state/hooks";
import { getFilteredJobList } from "../../state/features/job-list";
import { JobItem } from "./components/job-item";
import { ContentWrapper } from "../../lib/styles";

export const JobsList = () => {
  const renderList = useAppSelector(getFilteredJobList).map((job) => (
    <JobItem key={job.id} jobData={job} />
  ));
  return (
    <ContentWrapper>
      <Wrapper>
        <FilterMenu />
        <div className="job-listings">{renderList}</div>
      </Wrapper>
    </ContentWrapper>
  );
};
