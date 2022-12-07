import { createSlice } from '@reduxjs/toolkit';
export const searchSlice = createSlice({
    name: 'search',
    initialState: {
        isSearching: false,
        searchTerm:'',
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
            state.isSearching = false;
        },
        onChangeView: (state) => {
            state.isSearchingByGifs = !state.isSearchingByGifs;
        }

   }
});
export const { onSearching, onSetGifsData, onSetStickerData, onSetTagsRelated, onChangeView} = searchSlice.actions;