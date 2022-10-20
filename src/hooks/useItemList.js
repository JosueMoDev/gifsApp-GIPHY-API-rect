import { useState, useEffect } from "react";
import { getItemList } from "../helpers";

export const useItemList = (searchTerm) => {
    const [itemList, setItemList] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => { 
        getItemList(searchTerm).
            then(newItemList => {
                setItemList(newItemList);
                setIsLoading(false);
            })
        
    }, [])
    return {
        itemList
    }
}
