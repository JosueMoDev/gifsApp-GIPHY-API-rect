import { useState, useEffect } from "react";
import { getItemList } from "../helpers";

export const useItemList = (searchTerm) => {
    const [gifsList, setGifsList] = useState([]);
    const [stickersList, setStickersList] = useState([]);
    const [tagsList, setTagsList] = useState([]);

    useEffect(() => { 
        getItemList(searchTerm).
            then(({ gifsList, stickersList, tagsList }) => {
                setGifsList(gifsList);
                setStickersList(stickersList);
                setTagsList(tagsList);

            })
        
    }, [])

    return {
        gifsList,
        stickersList,
        tagsList
    }
}


