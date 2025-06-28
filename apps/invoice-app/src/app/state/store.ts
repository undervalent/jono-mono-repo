import { configureStore } from '@reduxjs/toolkit';
import uiSlice from './ui/ui.slice';
import invoiceSlice from './invoice/invoice.slice';
import entriesSlice from './entries/entries.slice';
export const store = configureStore({
  reducer: {
    ui: uiSlice,
    invoice: invoiceSlice,
    entries: entriesSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
