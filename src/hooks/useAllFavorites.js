import { useDispatch, useSelector } from 'react-redux';
import {  onAddToFavoritesToLocalStorage, addToFavoriteToFirebase, deleteFavoriteToFirebase, onDeleteToFavotiesToLocalStorage} from '../store';


export const useAllFavorites = () => {

    const { status } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const { allFavorites } = useSelector(state => state.favorites);
       
    const startingToAddFavorite = (item) => { 
        if (status === 'authenticated') {
            dispatch(addToFavoriteToFirebase(item));
        } else if (status === 'not-authenticated') {
            dispatch(onAddToFavoritesToLocalStorage(item));
        }
    }
    const startingToDeleteFavorite = (item) => { 
        if (status === 'authenticated') {
            dispatch(deleteFavoriteToFirebase(item));
        } else if (status === 'not-authenticated') {    
            dispatch(onDeleteToFavotiesToLocalStorage(item));
        }
    }


    return {
        // * PROPERTIES
        allFavorites,
        // * METHODS
        startingToAddFavorite,
        startingToDeleteFavorite,
 
    }
  
}