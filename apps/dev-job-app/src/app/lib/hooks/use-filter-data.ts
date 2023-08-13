import * as React from "react";
import { getUiValues } from "../../state/features/ui";
import { useAppDispatch, useAppSelector } from "../../state";

import {
  setSearchQuery,
  setLocationQuery,
  toggleFullTime,
  getIsFullTime,
  getSearchQuery,
  getLocationQuery,
  setFilteredJobList,
} from "../../state/features/job-list";

interface State {
  searchQuery: string;
  locationQuery: string;
  fullTime: boolean;
  labels: {
    checkboxLabel: string;
    searchPlaceholder: string;
    locationPlaceholder: string;
  };
}
interface Handlers {
  handleSearch(e: React.ChangeEvent<HTMLInputElement>): void;
  handleLocation(e: React.ChangeEvent<HTMLInputElement>): void;
  handleFilter(): void;
  handleFullTime(): void;
}

export function useFilterData(): [State, Handlers] {
  const dispatch = useAppDispatch();
  const fullTime = useAppSelector(getIsFullTime);
  const searchQuery = useAppSelector(getSearchQuery);
  const locationQuery = useAppSelector(getLocationQuery);
  const uiValues = useAppSelector(getUiValues);

  const handlers = React.useMemo(
    () => ({
      handleFullTime: () => dispatch(toggleFullTime()),
      handleSearch: (e: React.ChangeEvent<HTMLInputElement>) =>
        dispatch(setSearchQuery(e.target.value)),
      handleLocation: (e: React.ChangeEvent<HTMLInputElement>) =>
        dispatch(setLocationQuery(e.target.value)),
      handleFilter: () => dispatch(setFilteredJobList()),
    }),
    [dispatch]
  );

  const state = {
    fullTime,
    searchQuery,
    locationQuery,
    labels: uiValues,
  };
  return [state, handlers];
}
