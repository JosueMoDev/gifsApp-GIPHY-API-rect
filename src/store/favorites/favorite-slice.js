import { createSlice } from '@reduxjs/toolkit';
const allFavorites = JSON.parse(localStorage.getItem('allFavorites'));

export const favoritesSlice = createSlice({
    name: 'favorites',
    initialState: {
        allFavorites: allFavorites ||[],
        gifsProccessed:[],
        stickersProccessed:[]
    },
    
    reducers: {
        onAddToFavorites: (state, { payload }) => { 
            state.allFavorites = [...state.allFavorites, { ...payload, isFavorite:true }]
            localStorage.setItem('allFavorites', JSON.stringify(state.allFavorites));
           
        },
        onProccessGifs: (state, { payload }) => { 
           const gifs = payload.map(gif => ({
                ...gif,
                isFavorite: state.allFavorites.some( item => (item.id === gif.id ? true : false ))

           }))
           state.gifsProccessed = gifs
        },
        onProccessStickers: (state, { payload }) => { 
             const stickers = payload.map(sticker => ({
                ...sticker,
                isFavorite: state.allFavorites.some( item => (item.id === sticker.id ? true : false ))
             }));
            state.stickersProccessed = stickers;
        },
        onDeleteToFavoties: (state, { payload }) => { 
            
            state.allFavorites = state.allFavorites.filter( item => item.id !== payload );
            localStorage.setItem('allFavorites', JSON.stringify( state.allFavorites ) );

        }
   }
});
export const { onAddToFavorites, onProccessGifs, onProccessStickers, onDeleteToFavoties } = favoritesSlice.actions;