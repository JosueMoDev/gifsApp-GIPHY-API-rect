import { useState, useEffect } from "react";
import { fetchByArtisResponse } from "/src/api";

export const useGetGifsByArtist = () => {
  const [artist, setArtist] = useState([]);

  const getGifsByArtist = async () => {
    const { data } = await fetchByArtisResponse();
    const artistGifs = data.data.map((item) => ({
      id: item.id,
      title: item.title,
      url: item.images.original.webp,
      user: item.user,
    }));
    setArtist(artistGifs);
  };

  useEffect(() => {
    getGifsByArtist();
  }, []);
  return { artist };
};
