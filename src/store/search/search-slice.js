import { createSlice } from '@reduxjs/toolkit';
const searchTerm = JSON.parse(sessionStorage.getItem('searchTerm'));
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

    },
    reducers: {
        onSearching: (state, { payload }) => { 
            state.isSearching = true;
            state.searchTerm = payload;
            sessionStorage.setItem('searchTerm', JSON.stringify(state.searchTerm));
    
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
            state.isSearching = false;
            state.gifs = [];
            state.total_gifs = null;
            state.stickers = [];
            state.total_stickers = null;
            state.tags = [];
           
        }


   }
});
export const { onSearching, onSetGifsData, onSetStickerData, onSetTagsRelated, onChangeView, onClearSearch } = searchSlice.actions;