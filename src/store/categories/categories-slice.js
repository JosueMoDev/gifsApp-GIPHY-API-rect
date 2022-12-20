import { createSlice } from '@reduxjs/toolkit';
const categories = JSON.parse(localStorage.getItem('categories'));
export const categoriesSlice = createSlice({
    name: 'categories',
    initialState: {
        categories: categories || [],
        subcategories: [],
        subcategorySelected: null
        
    },
    reducers: {
        onLoadCategories: (state, { payload }) => { 
            state.categories = payload;
        },
        onSelectCategory: (state, { payload }) => { 
            state.subcategorySelected = payload.categy;
            state.subcategories = payload.subcategories
            
        } 
   }
});
export const { onLoadCategories, onSelectCategory } = categoriesSlice.actions;