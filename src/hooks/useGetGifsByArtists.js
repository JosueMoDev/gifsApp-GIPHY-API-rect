import { useState, useEffect } from "react";
import { fetchByArtisResponse } from "../api";
import { randomizeData } from "../helpers";

export const useGetGifsByArtist = () => { 
  const [artist, setArtist] = useState([])
// FIXME: some artis has any gifs on their profies, becase of that in artiscomponent we could shown any gif, And make a request twice generate a warning at module url
  const getGifsByArtist = async () => { 
    
    const { data } = await fetchByArtisResponse();
    const artistGifs = data.data.map(item => ({
      id: item.id,
      title: item.title,
      url: item.images.downsized_medium.url,
      user:item.user
    }));
    setArtist(artistGifs);
  }
  
  useEffect(() => {
    getGifsByArtist();
  }, [])
  return { artist }
}