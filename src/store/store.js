import { configureStore } from "@reduxjs/toolkit";
import { searchSlice } from "./";

export const store = configureStore({
  
  reducer: {
    search: searchSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  })
});