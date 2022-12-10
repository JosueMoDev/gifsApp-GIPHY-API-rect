import { configureStore } from "@reduxjs/toolkit";
import { searchSlice, favoritesSlice,uiSlice } from "./";

export const store = configureStore({
  
  reducer: {
    search: searchSlice.reducer,
    favorites: favoritesSlice.reducer,
    ui: uiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  })
});