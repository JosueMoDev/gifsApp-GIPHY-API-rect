import { useEffect, useReducer } from 'react';
import { allFavoritesReducer } from '../pages/allFavoritesReducer';
const init = () => {
    return JSON.parse(localStorage.getItem('allFavorites')) || [];
}
export const useAllFavorites = () => {
 
    const [ allFavorites, dispatch ] = useReducer( allFavoritesReducer, [], init );
    console.log(allFavorites);
    useEffect(() => {
      localStorage.setItem('allFavorites', JSON.stringify( allFavorites ) );
    }, [allFavorites])
    

    const handleAddToFavorites = (newFavorite) => {
        console.log("el favorite",newFavorite)
        const action = {
            type: '[FAVORITES] Add Favorite',
            payload: newFavorite
        }

        dispatch( action );
    }

    const handleDeleteToFavorites = ( id ) => {
        dispatch({
            type: '[FAVORITES] Remove Favorite',
            payload: id
        });
    }


    return {
        allFavorites,
        handleAddToFavorites,
        handleDeleteToFavorites
    }
  
}