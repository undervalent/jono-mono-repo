
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { determineFontFamily } from "../../../lib/utils";

export interface ThemeState {
  theme: "light" | "dark";
  font: "mono" | "sans" | "serif";
}

const initialState: ThemeState = {
  theme: "light",
  font: 'sans'
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
    setFont: (state, action) => {
      state.font = action.payload;
    }
  },
});

export default themeSlice.reducer;
export const {
  toggleTheme,
  setLightTheme,
  setDarkTheme,
  setFont
} = themeSlice.actions;

export const getTheme = (state: RootState) => state.ui.theme;
export const getSelectedFont = (state: RootState) => state.ui.font;
export const getFont = (state: RootState) => determineFontFamily(state.ui.font);
