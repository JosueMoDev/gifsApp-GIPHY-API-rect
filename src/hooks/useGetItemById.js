import {  useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";


import {  fetchGetItemById } from "../api";
import { onShowItem, onSearchingItemById } from "../store";
import { useAllFavorites } from "./useAllFavorites";

export const useGetItemById = () => {
    const dispatch = useDispatch();
    const { allFavorites } = useAllFavorites(); 
    const { item, item_id } = useSelector(state => state.search)
    const startShowingitem = (id) => { 
        dispatch((onSearchingItemById(id)))
    }
  

    const getItemById = async () => { 
        const { data } = await fetchGetItemById(item_id);
        const { id, images, title, slug, type } = data.data;
        const { url }=images.downsized
        dispatch(onShowItem({
            id, url, title, slug, type,
            isFavorite: allFavorites.some(item => (item.id === id ? true : false))
        }));
    }

    useEffect(() => {
        if (item_id){  
            getItemById();
        }
    }, [item_id])
    

    return {
        // ? PROPERTIES
        item,

        // ? METHODS
      startShowingitem

    }
}