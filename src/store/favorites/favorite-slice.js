import { createSlice } from '@reduxjs/toolkit';
const allFavorites = JSON.parse(localStorage.getItem('allFavorites'));

export const favoritesSlice = createSlice({
    name: 'favorites',
    initialState: {
        allFavorites: allFavorites ||[],
        gifsProccessed:[],
        stickersProccessed: [],
     
    },
    
    reducers: {
        onAddToFavorites: (state, { payload }) => { 
            if (payload.id) { 
                console.log('lo imprimi')
                state.allFavorites = [...state.allFavorites, { ...payload, isFavorite:true }]
                localStorage.setItem('allFavorites', JSON.stringify(state.allFavorites));
            }
        },
        onProccessGifs: (state, { payload }) => { 
     
        },
        onProccessData: (state, { payload }) => { 
         
            const gifs = payload.gifs.map(gif => ({
                ...gif,
                isFavorite: state.allFavorites.some( item => (item.id === gif.id ? true : false ))

            }))
            
            const stickers = payload.stickers.map(sticker => ({
                ...sticker,
                isFavorite: state.allFavorites.some( item => (item.id === sticker.id ? true : false ))
            }));

            state.gifsProccessed = gifs
            state.stickersProccessed = stickers;
        },
        onDeleteToFavoties: (state, { payload }) => { 
            
            state.allFavorites = state.allFavorites.filter( item => item.id !== payload );
            localStorage.setItem('allFavorites', JSON.stringify( state.allFavorites ) );

        }
   }
});
export const { onAddToFavorites, onProccessData, onDeleteToFavoties} = favoritesSlice.actions;