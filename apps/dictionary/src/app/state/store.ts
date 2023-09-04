
import { configureStore } from "@reduxjs/toolkit";
import { themeSlice } from "./features/ui";
import { formSlice } from './features/form';

export const store = configureStore({
  reducer: {
    ui: themeSlice.reducer,
    form: formSlice.reducer
  },
  devTools: true,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
