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
    isFormActive: false,
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
    toggleForm: (state) => {
      state.isFormActive = !state.isFormActive;
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
  },
});

export const {
  toggleForm,
  toggleTheme,
  setDialogActive,
  setDialogOptions,
  setFormActive,
} = uiSlice.actions;

export const getTheme = (state: RootState) => state.ui.theme;
export const getIsFormActive = (state: RootState) => state.ui.activeForm;
export const getIsDialogActive = (state: RootState) => state.ui.isDialogActive;
export const getDialogOptions = (state: RootState) => state.ui.dialogOptions;

export default uiSlice.reducer;
