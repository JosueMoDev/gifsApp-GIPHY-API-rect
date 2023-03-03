import {  useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";


import {  fetchGetGifs, fetchGetItemById, fetchGetTagsRelated } from "../api";
import { onShowItem, onSearchingItemById, onClearSearch, onSetItemTags, onSetGifsRelated } from "../store";
import { useAllFavorites } from "./useAllFavorites";

export const useGetItemById = () => {
    const dispatch = useDispatch();
    
    const { allFavorites } = useAllFavorites(); 

    const { item, item_id, itemTags, tagsTerms, itemGifsRelated,  user } = useSelector(state => state.showItem);
 
    
    const startShowingitem = (item) => { 
        dispatch(onSearchingItemById(item));
        dispatch(onClearSearch());
    }



    const getItemById = async () => { 
        const { data } = await fetchGetItemById(item_id);
        const { id, images, title, slug, type } = data.data;
        const { url } = images.original.webp
        const item = {
            id, url, title, slug, type, user,
            isFavorite: allFavorites.some(item => (item.id === id ? true : false))
        }

        const gifsResponse = await fetchGetGifs(title, 20);
        const gifsRelated = gifsResponse.data.data.map(gif => ({
            id: gif.id,
            title: gif.title,
            url: gif.images.original.webp,
            type: gif.type,
            slug: gif.slug,
            user: gif.user,
            isFavorite: allFavorites.some( favorite => (favorite.id === gif.id ? true : false ))
        }));
        dispatch(onShowItem(item));
        dispatch(onSetGifsRelated(gifsRelated));

    }
    const getTagsItem = async () => { 
        const { data } = await fetchGetTagsRelated(tagsTerms, 5);
        const tagsRelated = data.data.map(tag => ({
            name: tag.name
        }));

        dispatch(onSetItemTags(tagsRelated));
        
    }

    useEffect(() => {
        if (item_id){  
            getItemById();
            getTagsItem();
        }
    }, [item_id])

    useEffect(() => {
        if (item_id){  
            const  isItemFavorite = {
                ...item,
                isFavorite: allFavorites.some( favorite => (favorite.id === item.id ? true : false ))
            } 
            dispatch(onShowItem(isItemFavorite));
        }
     
    }, [allFavorites])

    useEffect(() => {
        if (itemGifsRelated && item_id) { 

            const gifsRelated = itemGifsRelated.map(gif => ({
                id: gif.id,
                title: gif.title,
                url: gif.url,
                type: gif.type,
                slug: gif.slug,
                user: gif.user,
                isFavorite: allFavorites.some( favorite => (favorite.id === gif.id ? true : false ))
            }));
            dispatch(onSetGifsRelated(gifsRelated));
        }

     }, [allFavorites])

    return {
        // ? PROPERTIES
        item,
        itemTags,
        itemGifsRelated,

        // ? METHODS
      startShowingitem

    }
}