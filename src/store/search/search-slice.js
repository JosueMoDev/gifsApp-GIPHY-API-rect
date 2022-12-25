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
        onSetData: (state, { payload }) => {
            
            const { gifsList, stickerList, tagsList } = payload
            // * here set gifs data    
            state.gifs = gifsList.gifs;
            state.total_gifs = gifsList.total_gifs;

            // * here set stickers data    
            state.stickers = stickerList.stickers;
            state.total_stickers = stickerList.total_stickers;

            // * here set tags data   
            state.tags = tagsList;
        },
        
        onChangeView: (state) => {
            state.isSearchingByGifs = !state.isSearchingByGifs;
        },
        onClearSearch: (state) => { 
            sessionStorage.removeItem('searchTerm');
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
export const { onSearching, onSetData, onChangeView, onClearSearch } = searchSlice.actions;