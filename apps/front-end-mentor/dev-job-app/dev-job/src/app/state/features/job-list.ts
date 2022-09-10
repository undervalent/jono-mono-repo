import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import jobListData from "../../lib/data/data";
import { IJob, ISelectOption, IFilterState } from "@devjobs/types";
import { generateSelectOptions, filterJobList } from "../utils";
import type { RootState } from "../store";

export interface JobListState extends IFilterState {
  jobList: IJob[];
  locations: ISelectOption[];
  positions: ISelectOption[];
}

const initialState: JobListState = {
  jobList: jobListData,
  locations: generateSelectOptions(jobListData, "location"),
  positions: generateSelectOptions(jobListData, "position"),
  fullTime: false,
  searchQuery: "",
  location: [],
};

export const jobListSlice = createSlice({
  name: "job-list",
  initialState,
  reducers: {
    toggleFullTime: (state) => {
      state.fullTime = !state.fullTime;
    },
    setSearchQuery: (state, { payload }: PayloadAction<string>) => {
      state.searchQuery = payload;
    },
    setLocation: (state, { payload }: PayloadAction<string[]>) => {
      state.location = payload;
    },
  },
});

export default jobListSlice.reducer;
export const { toggleFullTime, setSearchQuery, setLocation } =
  jobListSlice.actions;

export const getJobFilterState = (state: RootState) => ({
  fullTime: state.jobList.fullTime,
  searchQuery: state.jobList.searchQuery,
  locations: state.jobList.locations,
});

export const getFilteredJobList = (state: RootState) => {
  const jobListState = state.jobList.jobList;
  const filterOptions = {
    fullTime: state.jobList.fullTime,
    searchQuery: state.jobList.searchQuery,
    location: state.jobList.location,
  };
  return filterJobList(jobListState, filterOptions);
};
