import {  useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGetStickers, fetchGetGifs, fetchGetTagsRelated } from "../api";
import { onSearching, onSetGifsData, onSetStickerData, onSetTagsRelated, onChangeView, onClearSearch } from "../store";

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

    const getGifs = async () => { 
        const { data } = await fetchGetGifs(searchTerm);

        const gifs = data.data.map(gif => ({
            id: gif.id,
            title: gif.title,
            url: gif.images.original.url,
            type: gif.type,
            

        }));
        const gifsList = { gifs:gifs, total_gifs: data.pagination.total_count }
        dispatch(onSetGifsData(gifsList));
    }
    const getStickers = async () => { 
        const { data } = await fetchGetStickers(searchTerm);
        const stickers = data.data.map(sticker => ({
            id: sticker.id,
            title: sticker.title,
            url: sticker.images.original.url,
            type: sticker.type,
            isFavorite: false
        }));
        const stickerList = { stickers: stickers, total_stickers: data.pagination.total_count }
        dispatch(onSetStickerData(stickerList));
        
    }
    const getTags = async () => { 
        const { data } = await fetchGetTagsRelated(searchTerm);
        const tagsList = data.data.map(tag => ({
            name: tag.name
        }));
        dispatch(onSetTagsRelated(tagsList));
    }
    useEffect(() => { 
        getStickers();
        getGifs();
        getTags();
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