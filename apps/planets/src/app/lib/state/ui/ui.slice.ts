import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

export const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    isMenuOpen: false,
  },
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    closeMenu: (state) => {
      state.isMenuOpen = false;
    },
  },
});

export const { toggleMenu, closeMenu } = uiSlice.actions;

export const getIsMenuOpen = (state: RootState) => state.ui.isMenuOpen;

export default uiSlice.reducer;
