import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
export interface ThemeState {
  theme: "light" | "dark";
  deviceSize: "small" | "medium" | "large" | "huge";
  isModalActive: boolean;
}

const initialState: ThemeState = {
  theme: "light",
  deviceSize: "medium",
  isModalActive: false,
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.theme === "light"
        ? (state.theme = "dark")
        : (state.theme = "light");
    },
    setLightTheme: (state) => {
      state.theme = "light";
    },
    setDarkTheme: (state) => {
      state.theme = "dark";
    },
    setDeviceSize: (state, action) => {
      state.deviceSize = action.payload;
    },
    toggleModal: (state) => {
      state.isModalActive = !state.isModalActive;
    },
    closeModal: (state) => {
      state.isModalActive = false;
    },
    openModal: (state) => {
      state.isModalActive = true;
    },
  },
});

export default themeSlice.reducer;
export const {
  toggleTheme,
  setLightTheme,
  setDarkTheme,
  setDeviceSize,
  toggleModal,
  openModal,
  closeModal,
} = themeSlice.actions;

export const getTheme = (state: RootState) => state.ui.theme;
export const getDeviceSize = (state: RootState) => state.ui.deviceSize;
export const getUiValues = (state: RootState) => {
  const { deviceSize } = state.ui;
  const isLessThanMedium = deviceSize === "medium" || deviceSize === "small";
  return {
    checkboxLabel: isLessThanMedium ? "Full Time" : "Full Time Only",
    searchPlaceholder: isLessThanMedium
      ? "Filter by title..."
      : "Filter by title, companies, expertise...",
    locationPlaceholder: "Filter by location...",
  };
};
export const getIsModalActive = (state: RootState) => state.ui.isModalActive;
