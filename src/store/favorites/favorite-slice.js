import { createSlice } from '@reduxjs/toolkit';
const allFavorites = JSON.parse(localStorage.getItem('allFavorites'));

export const favoritesSlice = createSlice({
    name: 'favorites',
    initialState: {
        allFavorites: allFavorites ||[]
    },
    
    reducers: {
        onAddToFavorites: (state, { payload }) => { 
            if (payload.id) { 
                
                state.allFavorites = [...state.allFavorites, { ...payload, isFavorite:true }]
                localStorage.setItem('allFavorites', JSON.stringify(state.allFavorites));
            }
        },
        
        onAddFavoritesFromFirebase: (state, { payload }) => {
            state.allFavorites = [...payload]
            console.log( state.allFavorites )
        },
 
        onDeleteToFavoties: (state, { payload }) => { 
            
            state.allFavorites = state.allFavorites.filter( item => item.id !== payload );
            localStorage.setItem('allFavorites', JSON.stringify( state.allFavorites ) );

        }
   }
})
export const { onAddToFavorites,  onDeleteToFavoties, onAddFavoritesFromFirebase } = favoritesSlice.actions;