import { useDispatch, useSelector } from 'react-redux';
import { onAddToFavorites,  onDeleteToFavoties } from '../store';

export const useAllFavorites = () => {

    const dispatch = useDispatch();
    const { allFavorites } = useSelector(state => state.favorites);
       
    const startingToAddFavorite = (item) => { 
        dispatch(onAddToFavorites(item));
    }
    const startingToDeleteFavorite = (item) => { 
        dispatch(onDeleteToFavoties(item));
    }


    return {
        // * PROPERTIES
        allFavorites,
   
     
        // * METHODS
        startingToAddFavorite,
        startingToDeleteFavorite,
 
    }
  
}