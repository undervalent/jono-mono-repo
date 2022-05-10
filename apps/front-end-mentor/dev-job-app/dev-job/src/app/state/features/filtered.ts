import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFilterState } from "@devjobs/types";

const initialState: IFilterState = {
  fullTime: false,
  searchQuery: "",
  location: [],
};

export const filterSlice = createSlice({
  name: "filter",
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

export default filterSlice.reducer;
export const { toggleFullTime, setSearchQuery, setLocation } =
  filterSlice.actions;
