import { themeSlice } from "./features/theme";
import { filterSlice } from "./features/filtered";
export const availableActions = {
  theme: themeSlice.actions,
  filters: filterSlice.actions,
};
