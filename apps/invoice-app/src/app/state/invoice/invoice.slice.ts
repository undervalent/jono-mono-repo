import {
  createSlice,
  createEntityAdapter,
  PayloadAction,
  EntityState,
} from '@reduxjs/toolkit';
import { RootState } from '../store';
import { data } from './invoices';
import { Invoice } from '@lib/schemas';
import { formatInvoice } from './utils';

const invoicesAdapter = createEntityAdapter<any>();

export type InvoiceFilter = 'all' | 'draft' | 'pending' | 'paid';

type InvoicesState = EntityState<Invoice, string> & {
  filter: InvoiceFilter;
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
    setFilter: (state, action: PayloadAction<InvoiceFilter>) => {
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
  let filteredInvoices = null;
  switch (filter) {
    case 'all':
      filteredInvoices = selectAllInvoices(state);
      break;
    case 'draft':
      filteredInvoices = selectAllInvoices(state).filter(
        (invoice) => invoice.status === 'draft',
      );
      break;
    case 'pending':
      filteredInvoices = selectAllInvoices(state).filter(
        (invoice) => invoice.status === 'pending',
      );
      break;
    case 'paid':
      filteredInvoices = selectAllInvoices(state).filter(
        (invoice) => invoice.status === 'paid',
      );
      break;
  }

  return filteredInvoices.map((invoice) => formatInvoice(invoice));
};

export const getSelectedInvoice = (state: RootState) => {
  const invoice = selectInvoiceById(state, state.invoice.activeId);
  return formatInvoice(invoice);
};

export const getInvoiceById = (id: string) => (state: RootState) => {
  const invoice = selectInvoiceById(state, id);
  return formatInvoice(invoice);
};

export default invoiceSlice.reducer;
