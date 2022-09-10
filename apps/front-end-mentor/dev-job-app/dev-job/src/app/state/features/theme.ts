import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";

export interface ThemeState {
  theme: "light" | "dark";
}

const initialState: ThemeState = {
  theme: "light",
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
  },
});

export default themeSlice.reducer;
export const getThemeState = (state: RootState) => state.theme.theme;
export const { toggleTheme, setLightTheme, setDarkTheme } = themeSlice.actions;
