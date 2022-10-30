import { useState, useEffect } from "react";
import { fetchAnArtist, fetchByArtisResponse } from "../api";
import { randomizeData } from "../helpers";

export const useGetGifsByArtist = () => { 
  const [artist, setArtist] = useState([])
// FIXME: some artis has any gifs on their profies, becase of that in artiscomponent we could shown any gif
  const getGifsByArtist = async () => { 
    const artistsAPIresponse = await fetchAnArtist();
    const artistList = artistsAPIresponse.data.data.map(({ user }) => user);
    const artist = artistList.filter(element => element !== undefined)
    const data = artist.map(({ username }) => username);
    const anArtis = randomizeData(data)
    const gifsByuser = await fetchByArtisResponse(anArtis[0]);
    const gifsdata = gifsByuser.data.data.map(gifs => gifs);
    const artistGifs = gifsdata.map(item => ({
      id: item.id,
      title: item.title,
      url: item.images.downsized_medium.url
    }));
    setArtist(artistGifs);
  }
  
  useEffect(() => {
      getGifsByArtist();
    }, [])
  return { artist }
}