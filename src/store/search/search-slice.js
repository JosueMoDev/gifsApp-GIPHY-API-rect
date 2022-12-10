import { createSlice } from '@reduxjs/toolkit';
const searchTerm = JSON.parse(localStorage.getItem('searchTerm'));
export const searchSlice = createSlice({
    name: 'search',
    initialState: {
        isSearching: false,
        searchTerm:searchTerm||'',
        gifs: [],
        total_gifs: null,
        stickers: [],
        total_stickers:null,
        tags: [],
        favorites: [],
        isSearchingByGifs: true,
        item: {},
        item_id:null,
        isLoadingItem: false,
    },
    reducers: {
        onSearching: (state, { payload }) => { 
            state.isSearching = true;
            state.searchTerm = payload;
            localStorage.setItem('searchTerm', JSON.stringify(state.searchTerm));
    
        },
        onSetGifsData: (state, { payload }) => { 
            state.gifs = payload.gifs;
            state.total_gifs = payload.total_gifs;
        },
        onSetStickerData: (state, { payload }) => { 
            state.stickers = [...payload.stickers];
            state.total_stickers = payload.total_stickers;
        },
        onSetTagsRelated: (state, { payload }) => { 
            state.tags = [...payload];
        },
        onChangeView: (state) => {
            state.isSearchingByGifs = !state.isSearchingByGifs;
        },
        onClearSearch: (state) => { 
            state.searchTerm = '';
        },
        onSearchingItemById: (state, { payload }) => { 
            state.item_id = payload;
            state.searchTerm = '';
         state.gifs = [];
        },
        onSetItemTags: (state, { payload }) => { 
            state.itemTags = payload;
        },
        onShowItem: (state, { payload }) => { 
            state.item = payload;
        }

   }
});
export const {
    onSearching, onSetGifsData,
    onSetStickerData, onSetTagsRelated,
    onChangeView, onClearSearch,
    onShowItem, onSearchingItemById,
    onSetItemTags
} = searchSlice.actions;