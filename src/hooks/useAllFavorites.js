import { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { onAddToFavorites, onProccessGifs, onProccessStickers, onDeleteToFavoties } from '../store';

export const useAllFavorites = () => {

    const dispatch = useDispatch();
    const { gifsProccessed, stickersProccessed, allFavorites } = useSelector(state => state.favorites);
    const { gifs, stickers } = useSelector(state => state.search);
    
    useEffect(() => {
        dispatch(onProccessGifs(gifs))
        dispatch(onProccessStickers(stickers))
    }, [allFavorites])

    useEffect(() => {
        dispatch(onProccessGifs(gifs))
    }, [gifs])

    useEffect(() => {
        dispatch(onProccessStickers(stickers))
    }, [stickers])

    

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