import { useState, useEffect } from "react";
import { getItemList } from "../helpers";

export const useItemList = (searchTerm) => {
    const [gifsList, setGifsList] = useState([]);
    const [stickersList, setStickersList] = useState([])
    useEffect(() => { 
        getItemList(searchTerm).
            then(({ gifsList, stickersList }) => {
                setGifsList(gifsList);
                setStickersList(stickersList);
            })
        
    }, [])

    return {
        gifsList,
        stickersList
    }
}
