import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

export const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    theme: 'light',
    username: 'octocat',
  },
  reducers: {
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
    setUsername: (state, action) => {
      state.username = action.payload;
    },
  },
});

export const { setUsername, setTheme } = uiSlice.actions;

export const getTheme = (state: RootState) => state.ui.theme;
export const getUsername = (state: RootState) => state.ui.username;

export default uiSlice.reducer;
