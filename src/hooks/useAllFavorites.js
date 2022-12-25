import { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { onAddToFavorites,  onDeleteToFavoties } from '../store';

export const useAllFavorites = () => {

    const dispatch = useDispatch();
    const { allFavorites } = useSelector(state => state.favorites);
    
   
    // useEffect(() => {
    //     console.log('estoy cambiamdo favoritos')
    //     startProcessingData( gifs, stickers);
    // }, [allFavorites])

    // useEffect(() => {
    //     console.log('estoy cambiamdp')
    //     startProcessingData( gifs, stickers);
    // }, [gifs, stickers])

       
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