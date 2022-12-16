import { configureStore } from "@reduxjs/toolkit";
import { searchSlice, favoritesSlice,uiSlice, showItemSlice, categoriesSlice} from "./";

export const store = configureStore({
  
  reducer: {
    search: searchSlice.reducer,
    favorites: favoritesSlice.reducer,
    ui: uiSlice.reducer,
    showItem: showItemSlice.reducer,
    categories: categoriesSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  })
});