import { createSlice } from "@reduxjs/toolkit";
import jobListData from "../../lib/data/data";
import { IJob, ISelectOption } from "@devjobs/types";
import { generateSelectOptions } from "../utils";
export interface JobListState {
  jobList: IJob[];
  locations: ISelectOption[];
  positions: ISelectOption[];
}

const initialState: JobListState = {
  jobList: jobListData,
  locations: generateSelectOptions(jobListData, "location"),
  positions: generateSelectOptions(jobListData, "position"),
};

export const jobListSlice = createSlice({
  name: "job-list",
  initialState,
  reducers: {},
});

export default jobListSlice.reducer;
