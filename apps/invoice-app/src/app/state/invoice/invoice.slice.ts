import {
  createSlice,
  createEntityAdapter,
  PayloadAction,
  EntityState,
} from '@reduxjs/toolkit';
import { RootState } from '../store';
import { data } from './invoices';
import { Invoice } from '../../lib/types';

const invoicesAdapter = createEntityAdapter<Invoice>();

type InvoicesState = EntityState<Invoice, string> & {
  filter: string;
  activeId: string;
};

const initialState: InvoicesState = invoicesAdapter.setAll(
  invoicesAdapter.getInitialState({
    filter: 'all',
    activeId: '',
  }),
  data,
);
export const invoiceSlice = createSlice({
  name: 'invoice',
  initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<string>) => {
      state.filter = action.payload;
    },
    setActiveId: (state, action: PayloadAction<string>) => {
      state.activeId = action.payload;
    },
    removeInvoiceById: (state, action: PayloadAction<string>) => {
      invoicesAdapter.removeOne(state, action.payload);
      state.activeId = '';
    },
    markInvoiceAsPaid: (state, action: PayloadAction<string>) => {
      invoicesAdapter.updateOne(state, {
        id: action.payload,
        changes: { status: 'paid' },
      });
    },
  },
});

const selectors = invoicesAdapter.getSelectors<RootState>(
  (state) => state.invoice,
);

export const {
  selectAll: selectAllInvoices,
  selectById: selectInvoiceById,
  selectEntities: selectInvoiceEntities,
  selectIds: selectInvoiceIds,
} = selectors;

export const { setFilter, setActiveId, removeInvoiceById, markInvoiceAsPaid } =
  invoiceSlice.actions;

export const getFilter = (state: RootState) => state.invoice.filter;

export const getFilteredInvoices = (state: RootState) => {
  const { filter } = state.invoice;
  if (filter === 'draft') {
    return selectAllInvoices(state).filter(
      (invoice) => invoice.status === 'draft',
    );
  }
  if (filter === 'pending') {
    return selectAllInvoices(state).filter(
      (invoice) => invoice.status === 'pending',
    );
  }
  if (filter === 'paid') {
    return selectAllInvoices(state).filter(
      (invoice) => invoice.status === 'paid',
    );
  }
  return selectAllInvoices(state);
};

export const getSelectedInvoice = (state: RootState) =>
  selectInvoiceById(state, state.invoice.activeId);

export const getInvoiceById = (id: string) => (state: RootState) =>
  selectInvoiceById(state, id);

export default invoiceSlice.reducer;
