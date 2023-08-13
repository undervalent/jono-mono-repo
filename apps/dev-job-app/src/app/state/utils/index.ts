import { IJob, ISelectOption } from "../../lib/types";
import { JobListState } from "../features/job-list";

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

export function generateFilteredJobList({
  ids,
  entities,
  searchQuery,
  locationQuery,
  fullTime,
}: JobListState): any {
  let filteredIds = [...ids];

  if (entities === undefined) return [];

  if (fullTime) {
    filteredIds = filteredIds.filter(
      (el) => entities?.[el]?.contract === "Full Time"
    );
  }
  if (locationQuery.length) {
    filteredIds = filteredIds.filter((el) =>
      entities?.[el]?.location
        .toLowerCase()
        .includes(locationQuery.toLowerCase())
    );
  }
  if (searchQuery.length) {
    filteredIds = filteredIds.filter((el) => {
      const query = searchQuery.toLowerCase();
      return (
        entities?.[el]?.position.toLowerCase().includes(query) ||
        entities?.[el]?.description.toLowerCase().includes(query) ||
        entities?.[el]?.company.toLowerCase().includes(query)
      );
    });
  }

  return filteredIds;
}
