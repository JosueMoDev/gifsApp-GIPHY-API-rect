import { createSlice } from '@reduxjs/toolkit';
export const searchSlice = createSlice({
    name: 'search',
    initialState: {
        isSearching: false,
        searchTerm:'',
        gifs: [],
        stickers: [],
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
            state.gifs = payload;
        },
        onSetStickerDate: (state, { payload }) => { 
            state.stickers = payload;
        },
        onSetTagsRelated: (state, { payload }) => { 
            state.tags = payload;
        },
        onChangeView: (state) => {
            state.isSearchingByGifs = !state.isSearchingByGifs;
        }

   }
});
export const { onSearching, onSetGifsData, onSetStickerDate, onSetTagsRelated, onChangeView} = searchSlice.actions;