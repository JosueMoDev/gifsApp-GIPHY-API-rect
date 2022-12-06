import { configureStore } from "@reduxjs/toolkit";
import { searchSlice, favoritesSlice } from "./";

export const store = configureStore({
  
  reducer: {
    search: searchSlice.reducer,
    favorites: favoritesSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  })
});