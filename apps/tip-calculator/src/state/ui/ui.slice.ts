import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

export const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    numberOfPeople: 1,
    billAmount: 0,
    tipPercentage: 0,
  },
  reducers: {
    setNumberOfPeople: (state, action) => {
      state.numberOfPeople = action.payload;
    },
    setBillAmount: (state, action) => {
      state.billAmount = action.payload;
    },
    setTipPercentage: (state, action) => {
      state.tipPercentage = action.payload;
    },
    resetTotals: (state) => {
      state.numberOfPeople = 1;
      state.billAmount = 0;
      state.tipPercentage = 0;
    },
  },
});

export const {
  setNumberOfPeople,
  setBillAmount,
  setTipPercentage,
  resetTotals,
} = uiSlice.actions;

export const getNumberOfPeople = (state: RootState) => state.ui.numberOfPeople;
export const getBillAmount = (state: RootState) => state.ui.billAmount;
export const getTipPercentage = (state: RootState) => state.ui.tipPercentage;

export const getTotals = (state: RootState) => {
  const { billAmount, tipPercentage, numberOfPeople } = state.ui;
  const tipPerPerson = (
    (billAmount * (tipPercentage / 100)) /
    numberOfPeople
  ).toFixed(2);
  const totalPerPerson = (
    (billAmount + billAmount * (tipPercentage / 100)) /
    numberOfPeople
  ).toFixed(2);
  return {
    tipPerPerson,
    totalPerPerson,
  };
};

export default uiSlice.reducer;
