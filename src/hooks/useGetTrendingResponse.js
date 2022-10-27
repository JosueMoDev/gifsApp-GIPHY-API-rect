import { useState, useEffect } from "react";
import { fetchTendringResponse } from "../api";
import { elimiteDuplicateData, randomizeData } from "../helpers";

export const useGetTrendingResponse = () => { 
  const [trending, setTrending] = useState([]);  
    const getTrendingGiphys = async () => {
      //Bring data from GIPHY API of trending endpoint 
      const ApiResponse = await fetchTendringResponse('trending');
      // Here Cleand up duplicate items from API response
      const trendingGifs = elimiteDuplicateData(ApiResponse);
      // Set Only Just usefull data
      const trending = trendingGifs.map(item => ({
        id: item.id,
        title: item.title,
        url: item.images.downsized.url
      }));
      
      setTrending(randomizeData(trending));
    };

    useEffect(() => {
      getTrendingGiphys();
    }, [])
  return { trending }
}