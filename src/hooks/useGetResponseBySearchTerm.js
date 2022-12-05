import {  useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGetStickers, fetchGetGifs, fetchGetTagsRelated } from "../api";
import { onSearching, onSetGifsData, onSetStickerDate, onSetTagsRelated, onChangeView } from "../store";

export const useGetResposeBySearchTerm = () => {

    const dispatch = useDispatch();

    const { searchTerm, gifs, stickers, tags, isSearchingByGifs } = useSelector( state => state.search)

    const startSearching = ( searchTerm ) => { 
        dispatch(onSearching(searchTerm));
    }

    const startSwitchingButton = () => {
        dispatch(onChangeView());
    }

    const getGifs = async () => { 
        const { data } = await fetchGetGifs(searchTerm);
        const allFavorites = localStorage.getItem('allFavorites');

        const gifs = data.data.map(gif => ({
            id: gif.id,
            title: gif.title,
            url: gif.images.original.url,
            type: gif.type,
            // TODO: make suro to muttate array on favorite-slice
            isFavorite:(allFavorites.includes(gif.id)) ? true : false

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
        dispatch(onSetStickerDate(stickerList));
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
        gifs, stickers, tags, searchTerm, isSearchingByGifs,

        // ? METHODS
        startSearching,
        startSwitchingButton

    }
}