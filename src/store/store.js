import { configureStore } from "@reduxjs/toolkit";
import {
  searchSlice,
  favoritesSlice,
  uiSlice,
  showItemSlice,
  categoriesSlice,
  authSlice,
} from "/src/store";

export const store = configureStore({
  reducer: {
    search: searchSlice.reducer,
    favorites: favoritesSlice.reducer,
    ui: uiSlice.reducer,
    showItem: showItemSlice.reducer,
    categories: categoriesSlice.reducer,
    auth: authSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
