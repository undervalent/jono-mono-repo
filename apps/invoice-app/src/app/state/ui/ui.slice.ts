import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

export const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    theme:
      typeof window !== 'undefined'
        ? localStorage.getItem('theme') || 'light'
        : 'light',
    activeForm: '',
    isDialogActive: false,
    dialogOptions: null,
  },
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
    },
    setFormActive: (state, action) => {
      state.activeForm = action.payload;
    },
    setDialogActive: (state, action) => {
      if (action.payload === false) {
        state.dialogOptions = null;
      }
      state.isDialogActive = action.payload;
    },
    setDialogOptions: (state, action) => {
      state.dialogOptions = action.payload;
    },
    resetActiveForm: (state) => {
      state.activeForm = '';
    },
  },
});

export const { toggleTheme, setDialogActive, setDialogOptions, setFormActive } =
  uiSlice.actions;

export const getTheme = (state: RootState) => state.ui.theme;
export const getActiveForm = (state: RootState) => state.ui.activeForm;
export const getIsDialogActive = (state: RootState) => state.ui.isDialogActive;
export const getDialogOptions = (state: RootState) => state.ui.dialogOptions;

export default uiSlice.reducer;
