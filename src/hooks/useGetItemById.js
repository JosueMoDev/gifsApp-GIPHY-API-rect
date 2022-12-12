import {  useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";


import {  fetchGetItemById, fetchGetTagsRelated } from "../api";
import { onShowItem, onSearchingItemById, onClearSearch, onSetItemTags } from "../store";
import { useAllFavorites } from "./useAllFavorites";

export const useGetItemById = () => {
    const dispatch = useDispatch();
    
    const { allFavorites } = useAllFavorites(); 

    const { item, item_id, itemTags, tagsTerms, user } = useSelector(state => state.showItem);
 
    
    const startShowingitem = (item) => { 
        dispatch(onSearchingItemById(item));
        dispatch(onClearSearch());
    }
  

    const getItemById = async () => { 
        const { data } = await fetchGetItemById(item_id);
        const { id, images, title, slug, type } = data.data;
        const { url }=images.downsized
        dispatch(onShowItem({
            id, url, title, slug, type, user,
            isFavorite: allFavorites.some(item => (item.id === id ? true : false))
        }));

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
       const  isItemFavorite = {
            ...item,
            isFavorite: allFavorites.some( favorite => (favorite.id === item.id ? true : false ))
        } 
        dispatch(onShowItem(isItemFavorite));
    }, [allFavorites])

    return {
        // ? PROPERTIES
        item,
        itemTags,

        // ? METHODS
      startShowingitem

    }
}