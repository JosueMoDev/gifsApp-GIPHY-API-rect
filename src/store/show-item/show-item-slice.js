import { createSlice } from '@reduxjs/toolkit';
export const showItemSlice = createSlice({
    name: 'showItem',
    initialState: {
        item: {},
        itemTags:[], 
        item_id:null,
        isLoadingItem: false,
        tagsTerms: null
    },
    reducers: {
        onSearchingItemById: (state, { payload }) => { 
            state.item_id = payload.id;
            state.tagsTerms = payload.name;

        },
        onShowItem: (state, { payload }) => { 
            state.item = payload;
        },
        onSetItemTags: (state, { payload }) => { 
            state.itemTags = payload;
        }
   }
});
export const { onSearchingItemById, onShowItem, onSetItemTags } = showItemSlice.actions;