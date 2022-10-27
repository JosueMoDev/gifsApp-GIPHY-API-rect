import { useState, useEffect } from "react";
import { fetchByArtisResponse } from "../api";
import { elimiteDuplicateData, randomizeData } from "../helpers";

export const useGetArtistsResponse = () => { 
  // TODO: try to get artist from api 
  const artists = ['Boopy Club', 'imrobinthisjoint', 'Alex Boya', 'Katie Jones', 'cebrazul',
    'Gavin Dias', 'Lorna Mills', 'Sean Solomon', 'Neil Sanders', 'BugznSlutz', 'elzie'];
    const [artist, setArtist] = useState([])
    
    const getByArtisGifs = async () => { 
      const q = randomizeData(artists)
      console.log(q[0]);
      const ApiResponse = await fetchByArtisResponse(q[0]);
      const artistGifs = elimiteDuplicateData(ApiResponse);
      const artist = artistGifs.map(item => ({
        id: item.id,
        title: item.title,
        url: item.images.downsized_medium.url
      }));
      setArtist(randomizeData(artist));
    }

    useEffect(() => {
      getByArtisGifs();
    }, [])
  
  return { artist }
}