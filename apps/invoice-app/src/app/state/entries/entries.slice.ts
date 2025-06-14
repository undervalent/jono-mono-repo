import {
  createSlice,
  createEntityAdapter,
  EntityState,
} from '@reduxjs/toolkit';
import currency from 'currency.js';

import { RootState } from '@state/store';
import entries from './data';
import { Entry } from '@lib/schemas';
import { convertToDollars, generateInvoiceItemTotal } from '@lib/utils';

const entriesAdapter = createEntityAdapter<any>();
type InvoicesState = EntityState<Entry, string> & {
  activeInvoiceId: string;
};

const initialState: InvoicesState = entriesAdapter.setAll(
  entriesAdapter.getInitialState({
    activeInvoiceId: '',
  }),
  entries,
);
export const entriesSlice = createSlice({
  name: 'entris',
  initialState,
  reducers: {},
});

const selectors = entriesAdapter.getSelectors<RootState>(
  (state) => state.entries,
);

export const {
  selectAll: selectAllEntries,
  selectById: selectEntryById,
  selectEntities: selectEntryEntities,
  selectIds: selectEntryIds,
} = selectors;

export const selectEntriesByInvoiceId =
  (invoiceId: string) => (state: RootState) => {
    const entities = selectEntryEntities(state);
    const entries = Object.values(entities).filter(
      (entry) => entry?.invoiceId === invoiceId,
    );
    const withTotals = entries.map((entry) => {
      return {
        ...entry,
        currencyPrice: convertToDollars(entry.price),
      };
    });

    return withTotals;
  };

export const selectInvoiceTotal = (invoiceId: string) => (state: RootState) => {
  const entries = selectEntriesByInvoiceId(invoiceId)(state);
  const total = entries.reduce(
    (sum, entry) => sum.add(currency(entry.price).multiply(entry.quantity)),
    currency(0),
  );
  return total.format();
};

export default entriesSlice.reducer;
