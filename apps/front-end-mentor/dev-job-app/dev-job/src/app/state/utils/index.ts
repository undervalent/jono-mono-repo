import { IJob, ISelectOption, IFilterState } from "@devjobs/types";

export const generateSelectOptions = (
  data: IJob[],
  dataKey: keyof IJob
): ISelectOption[] => {
  const allItems = data.map((el) => el[dataKey]);
  const filteredItems = Array.from(new Set(allItems));
  return filteredItems.map((el) => ({
    value: el,
    label: el,
  }));
};

// export const generateJobTitles = (data: IJob[]) => {
//   const allLocations = data.map((el) => el.position);
//   const filteredLocations = Array.from(new Set(allLocations));
//   return filteredLocations.map((el) => ({
//     value: el,
//     label: el,
//   }));
// };

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
