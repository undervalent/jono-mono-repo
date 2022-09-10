import { useAppDispatch, useAppSelector } from "../../../../state";
import {
  toggleFullTime,
  setSearchQuery,
  setLocation,
} from "../../../../state/features/filtered";
import { ISelectOption } from "@devjobs/types";

interface IState {
  locations: ISelectOption[];
  fullTime: boolean;
  searchQuery: string;
}

interface IHandlers {
  handleFullTime(): void;
  handleSearch(e: React.ChangeEvent<HTMLInputElement>): void;
  handleLocation(option: any): void;
}

export function useFilterData(): [IState, IHandlers] {
  const dispatch = useAppDispatch();

  const { locations, fullTime, searchQuery } = useAppSelector((state) => ({
    fullTime: state.filter.fullTime,
    searchQuery: state.filter.searchQuery,
    locations: state.jobList.locations,
  }));

  const state = { locations, fullTime, searchQuery };
  const handlers = {
    handleFullTime: () => dispatch(toggleFullTime()),
    handleSearch: (e: React.ChangeEvent<HTMLInputElement>) =>
      dispatch(setSearchQuery(e.target.value)),
    handleLocation: (option: any) => {
      const value = option && option.value ? [option.value] : [];
      dispatch(setLocation(value));
    },
  };
  return [state, handlers];
}
