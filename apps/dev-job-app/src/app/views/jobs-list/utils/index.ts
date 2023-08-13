import { IFilterState } from "../../../lib/types";

export const filterJobList = (
  jobList: any[],
  entities: any,
  filterOptions: IFilterState
) => {
  const { fullTime, searchQuery, location } = filterOptions;
  let output = [...jobList];

  if (fullTime) {
    output = output.filter((el) => entities[el].contract === "Full Time");
  }
  if (location.length) {
    output = output.filter((el) => location.includes(entities[el].location));
  }
  if (searchQuery) {
    output = output.filter((el) =>
      entities[el].position.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }
  return output;
};
