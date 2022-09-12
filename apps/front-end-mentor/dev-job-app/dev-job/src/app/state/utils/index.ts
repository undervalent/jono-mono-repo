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

function hasSearchQuery(text: string, searchQuery: string) {
  return text.toLowerCase().includes(searchQuery.toLowerCase());
}

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
    output = output.filter((el) => {
      const hasPosition = hasSearchQuery(el.position, searchQuery);
      const hasCompany = hasSearchQuery(el.company, searchQuery);
      const hasRole = hasSearchQuery(el.role.content, searchQuery);
      const hasDescription = hasSearchQuery(el.description, searchQuery);
      return hasPosition || hasCompany || hasRole || hasDescription;
    });
  }
  return output;
};
