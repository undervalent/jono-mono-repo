import { useAppDispatch, useAppSelector } from "../../../../state";
import {
  toggleFullTime,
  setSearchQuery,
  setLocation,
  getJobFilterState,
} from "../../../../state/features/job-list";
import { ISelectOption } from "@devjobs/types";

export interface IState {
  locations: ISelectOption[];
  fullTime: boolean;
  searchQuery: string;
}

export interface IHandlers {
  handleFullTime(): void;
  handleSearch(e: React.ChangeEvent<HTMLInputElement>): void;
  handleLocation(option: any): void;
}

export function useFilterData(): [IState, IHandlers] {
  const dispatch = useAppDispatch();

  const { locations, fullTime, searchQuery } =
    useAppSelector(getJobFilterState);

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
