import React from "react";
import { Wrapper } from "./job-list.styles";
import { FilterMenu } from "./components";
import { useAppSelector } from "../../state/hooks";
import { JobItem } from "./components/job-item";
import { ContentWrapper } from "../../lib/styles";
import { filterJobList } from "./utils";

export const JobsList = () => {
  const { jobList, filter } = useAppSelector(({ filter, jobList }) => ({
    jobList: jobList.jobList,
    filter,
  }));

  const renderList = filterJobList(jobList, filter).map((job) => (
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
