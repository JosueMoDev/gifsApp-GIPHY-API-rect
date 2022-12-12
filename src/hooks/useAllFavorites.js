import { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { onAddToFavorites, onProccessData, onDeleteToFavoties } from '../store';

export const useAllFavorites = () => {

    const dispatch = useDispatch();
    const { gifsProccessed, stickersProccessed, allFavorites } = useSelector(state => state.favorites);
    const { gifs, stickers } = useSelector(state => state.search);
    
 
    useEffect(() => {
        dispatch(onProccessData({gifs, stickers}))
    }, [gifs, stickers, allFavorites])

    

    const startingToAddFavorite = (item) => { 
        dispatch(onAddToFavorites(item));
    }
    const startingToDeleteFavorite = (item) => { 
        dispatch(onDeleteToFavoties(item));
    }


    return {
        // * PROPERTIES
        gifsProccessed,
        stickersProccessed,
        allFavorites,
   
     
        // * METHODS
        startingToAddFavorite,
        startingToDeleteFavorite,
 
    }
  
}