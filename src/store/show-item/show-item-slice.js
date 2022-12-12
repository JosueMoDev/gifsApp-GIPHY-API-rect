import { createSlice } from '@reduxjs/toolkit';
const itemSelected = JSON.parse(sessionStorage.getItem('itemSelected'));
export const showItemSlice = createSlice({
    name: 'showItem',
    initialState: {
        item: itemSelected || {},
        itemTags:[], 
        item_id: null,
        user: {},
        isLoadingItem: false,
        tagsTerms: null
    },
    reducers: {
        onSearchingItemById: (state, { payload }) => { 
            state.item_id = payload.id;
            state.tagsTerms = payload.name;
            state.user = payload.user;

        },
        onShowItem: (state, { payload }) => { 
            state.item = payload;
            sessionStorage.setItem('itemSelected', JSON.stringify(state.item));
    
        },
        onSetItemTags: (state, { payload }) => { 
            state.itemTags = payload;
        }
   }
});
export const { onSearchingItemById, onShowItem, onSetItemTags } = showItemSlice.actions;