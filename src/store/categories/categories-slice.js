import { createSlice } from '@reduxjs/toolkit';
// const categories = JSON.parse(sessionStorage.getItem('categories'));
export const categoriesSlice = createSlice({
    name: 'categories',
    initialState: {
        categories:  [],
        subCategories: [],
        subCategorySelected: null
        
    },
    reducers: {
        onLoadCategories: (state, { payload }) => { 
            state.categories = payload;
        },
        onSelectCategory: (state, { payload }) => { 
            state.subCategorySelected = payload; 
            state.categories.map(category => (category.name === payload ? state.subCategories =[...category.subcategories ]  : []));
        }
        
   }
});
export const { onLoadCategories, onSelectCategory } = categoriesSlice.actions;