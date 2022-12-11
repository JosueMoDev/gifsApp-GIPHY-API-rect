import {  useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGetStickers, fetchGetGifs, fetchGetTagsRelated } from "../api";
import { onSearching, onSetData, onChangeView, onClearSearch } from "../store";

export const useGetResposeBySearchTerm = () => {

    const dispatch = useDispatch();

    const { searchTerm, gifs, stickers, tags, isSearchingByGifs, total_gifs, total_stickers } = useSelector( state => state.search)
   
    const startSearching = ( searchTerm ) => { 
        dispatch(onSearching(searchTerm));
    }

    const startSwitchingButton = () => {
        dispatch(onChangeView());
    }
    const startCleaningSearch = () => { 
        dispatch(onClearSearch());
    }

    const getDataBySearchTerm = async () => { 
        // ? here get Gifs
        const gifsResponse = await fetchGetGifs(searchTerm);
        const gifs = gifsResponse.data.data.map(gif => ({
            id: gif.id,
            title: gif.title,
            url: gif.images.original.url,
            type: gif.type,
            slug: gif.slug
            

        }));
        const gifsList = { gifs: gifs, total_gifs: gifsResponse.data.pagination.total_count }
        
        // ? here get Stickers

        const stickerResponse = await fetchGetStickers(searchTerm);
        const stickers = stickerResponse.data.data.map(sticker => ({
            id: sticker.id,
            title: sticker.title,
            url: sticker.images.original.url,
            type: sticker.type,
            slug: sticker.slug
        }));
        const stickerList = { stickers: stickers, total_stickers: stickerResponse.data.pagination.total_count }

        //  ? here get tags
        const  tags  = await fetchGetTagsRelated(searchTerm, 3);
        const tagsList = tags.data.data.map(tag => ({
            name: tag.name
        }));

        dispatch(onSetData({gifsList, stickerList, tagsList}));
    }

    useEffect(() => { 
        if (searchTerm !== '') { 
            getDataBySearchTerm();
        }
    }, [searchTerm])

    return {
        // ? PROPERTIES
        gifs, stickers, tags, searchTerm, isSearchingByGifs, total_gifs, total_stickers,

        // ? METHODS
        startSearching,
        startSwitchingButton,
        startCleaningSearch

    }
}