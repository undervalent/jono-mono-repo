import {
  createSlice,
  createEntityAdapter,
  PayloadAction,
  Dictionary,
  EntityId,
} from "@reduxjs/toolkit";
import jobListData from "../../lib/data/data";
import { IJob } from "../../lib/types";
import { RootState } from "../store";
import { generateFilteredJobList } from "../utils/index";
const jobsAdapter = createEntityAdapter<IJob>({
  // Assume IDs are stored in a field other than `job.id`
  // selectId: (job) => job.id,
  // Keep the "all IDs" array sorted based on book titles
  sortComparer: (a, b) => a.location.localeCompare(b.location),
});

const emptyInitialState = jobsAdapter.getInitialState();
const initialState = jobsAdapter.upsertMany(emptyInitialState, jobListData);

export interface JobListState {
  entities: Dictionary<IJob>;
  ids: EntityId[];
  fullTime: boolean;
  searchQuery: string;
  locationQuery: string;
  filteredJobList?: EntityId[];
  showCount?: number;
}

export const jobListSlice = createSlice({
  name: "jobList",
  initialState: {
    ...initialState,
    fullTime: false,
    searchQuery: "",
    location: [],
    locationQuery: "",
    filteredJobList: initialState.ids,
    showCount: 1,
  },
  reducers: {
    toggleFullTime: (state) => {
      state.fullTime = !state.fullTime;
    },
    setSearchQuery: (state, { payload }: PayloadAction<string>) => {
      state.searchQuery = payload;
    },
    setLocationQuery: (state, { payload }: PayloadAction<string>) => {
      state.locationQuery = payload;
    },
    updateShowCount: (state) => {
      state.showCount = state.showCount + 1;
    },
    setFilteredJobList: (state) => {
      state.filteredJobList = generateFilteredJobList({
        ids: state.ids,
        entities: state.entities,
        searchQuery: state.searchQuery,
        locationQuery: state.locationQuery,
        fullTime: state.fullTime,
      });
      state.showCount = 1;
    },
  },
});

export const getIsFullTime = (state: RootState) => state.jobList.fullTime;
export const getSearchQuery = (state: RootState) => state.jobList.searchQuery;
export const getLocationQuery = (state: RootState) =>
  state.jobList.locationQuery;

export const getFilteredJobList = (state: RootState) => {
  const { entities, filteredJobList, showCount } = state.jobList;
  const count = showCount * 12;
  return filteredJobList.map((id: any, idx: number) =>
    idx < count ? entities[id] : null
  );
};
export const getEntities = (state: RootState) => state.jobList.entities;

export const {
  toggleFullTime,
  setSearchQuery,
  setLocationQuery,
  setFilteredJobList,
  updateShowCount,
} = jobListSlice.actions;

export default jobListSlice.reducer;
