import { useDispatch, useSelector } from 'react-redux';
import { onAddToFavorites,  onDeleteToFavoties, onAddToFavoriteFibase, onDeleteToFavoriteFibase } from '../store';
import { useAuth } from './useAuth';

export const useAllFavorites = () => {

    const { status } = useAuth()
    const dispatch = useDispatch();
    const { allFavorites } = useSelector(state => state.favorites);
       
    const startingToAddFavorite = (item) => { 
        if (status === 'authenticated') {
            dispatch(onAddToFavoriteFibase(item));
        } else if (status === 'not-authenticated') {
            
            dispatch(onAddToFavorites(item));
        }
    }
    const startingToDeleteFavorite = (item) => { 
        if (status === 'authenticated') {
            dispatch(onDeleteToFavoriteFibase(item));
        } else if (status === 'not-authenticated') {    
            dispatch(onDeleteToFavoties(item));
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