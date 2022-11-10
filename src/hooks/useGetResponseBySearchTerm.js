import { useState, useEffect } from "react";
import { fetchGetStickers, fetchGetGifs, fetchGetTagsRelated } from "../api";

export const useGetResposeBySearchTerm = (searchTerm) => {
    const [gifsList, setGifsList] = useState([]);
    const [stickersList, setStickersList] = useState([]);
    const [tagsList, setTagsList] = useState([]);

    const getGifs = async () => { 
        const { data } = await fetchGetGifs(searchTerm);
        const allFavorites = localStorage.getItem('allFavorites');

        const gifs = data.data.map(gif => ({
            id: gif.id,
            title: gif.title,
            url: gif.images.original.url,
            type: gif.type,
            isFavorite:(allFavorites.includes(gif.id)) ? true : false

        }));
        const gifsList = { gifs:gifs, total_gifs: data.pagination.total_count }
        setGifsList(gifsList);
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
        setStickersList(stickerList);
    }
    const getTags = async () => { 
        const { data } = await fetchGetTagsRelated(searchTerm);
        const tagsList = data.data.map(tag => ({
            name: tag.name
        }));
        setTagsList(tagsList);
    }
    useEffect(() => { 
        getStickers();
        getGifs();
        getTags();
    }, [])

    return { gifsList, stickersList, tagsList }
}