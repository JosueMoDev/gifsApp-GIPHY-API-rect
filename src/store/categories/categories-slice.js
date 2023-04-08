import { createSlice } from "@reduxjs/toolkit";
const categories = JSON.parse(localStorage.getItem("categories"));
export const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    categories: categories || [],
    subcategories: [],
    subcategorySelected: null,
  },
  reducers: {
    onLoadCategories: (state, { payload }) => {
      state.categories = payload;
    },
    onSelectCategory: (state, { payload }) => {
      state.subcategorySelected = payload.subcategory;
      state.subcategories = payload.subcategories;
    },
    onClearCategories: (state) => {
      state.subcategories = [];
      state.subcategorySelected = null;
    },
  },
});
export const {
    onLoadCategories,
    onSelectCategory,
    onClearCategories
} = categoriesSlice.actions;
