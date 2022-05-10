import { IJob, IFilterState } from "@devjobs/types";

export const filterJobList = (jobList: IJob[], filterOptions: IFilterState) => {
  const { fullTime, searchQuery, location } = filterOptions;
  let output = [...jobList];

  if (fullTime) {
    output = output.filter((el) => el.contract === "Full Time");
  }
  if (location.length) {
    output = output.filter((el) => location.includes(el.location));
  }
  if (searchQuery) {
    output = output.filter((el) =>
      el.position.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }
  return output;
};
