import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGetStickers, fetchGetGifs, fetchGetTagsRelated } from "/src/api";
import {
  onSearching,
  onSetData,
  onChangeView,
  onClearSearch,
  onReloadData,
} from "/src/store";
import { checkIfItemIsFavorite } from "./helpers/checkIfItemIsFavorite";

export const useGetResposeBySearchTerm = () => {
  const dispatch = useDispatch();

  const {
    searchTerm,
    gifs,
    stickers,
    tags,
    isSearchingByGifs,
    total_gifs,
    total_stickers,
    isSearching,
  } = useSelector((state) => state.search);
  const { allFavorites } = useSelector((state) => state.favorites);

  const startSearching = (searchTerm) => {
    dispatch(onSearching(searchTerm));
  };

  const startSwitchingButton = () => {
    dispatch(onChangeView());
  };
  const startCleaningSearch = () => {
    dispatch(onClearSearch());
  };

  const getDataBySearchTerm = async () => {
    // ? here get Gifs
    const gifsResponse = await fetchGetGifs(searchTerm);
    const stickerResponse = await fetchGetStickers(searchTerm);
    const tags = await fetchGetTagsRelated(searchTerm, 3);

    const gifs = gifsResponse.data.data.map((gif) => ({
      id: gif.id,
      title: gif.title,
      url: gif.images.original.webp,
      type: gif.type,
      slug: gif.slug,
      user: gif.user,
    }));

    const gifsList = {
      gifs: gifs,
      total_gifs: gifsResponse.data.pagination?.total_count,
    };

    // ? here get Stickers

    const stickers = stickerResponse.data.data.map((sticker) => ({
      id: sticker.id,
      title: sticker.title,
      url: sticker.images.original.webp,
      type: sticker.type,
      slug: sticker.slug,
      user: sticker.user,
    }));
    const stickersList = {
      stickers: stickers,
      total_stickers: stickerResponse.data.pagination?.total_count,
    };

    //  ? here get tags
    const tagsList = tags.data.data.map((tag) => ({
      name: tag.name,
    }));

    startSettingData(gifsList, stickersList, tagsList);
  };

  const startSettingData = (gifsList, stickersList, tagsList) => {
    const gifs_list = checkIfItemIsFavorite(gifsList.gifs, allFavorites);

    const stickers_list = checkIfItemIsFavorite(
      stickersList.stickers,
      allFavorites
    );

    const total_gifs = gifsList.total_gifs;

    const total_stickers = stickersList.total_stickers;

    dispatch(
      onSetData({
        gifs_list,
        total_gifs,
        stickers_list,
        total_stickers,
        tagsList,
      })
    );
  };

  useEffect(() => {
    if (isSearching === true) {
      getDataBySearchTerm();
    }
  }, [isSearching]);

  useEffect(() => {
    if (searchTerm !== "" && !isSearching) {
      const gifs_list = checkIfItemIsFavorite(gifs, allFavorites);

      const stickers_list = checkIfItemIsFavorite(stickers, allFavorites);

      dispatch(onReloadData({ gifs_list, stickers_list }));
    }
  }, [allFavorites]);

  return {
    // ? PROPERTIES
    gifs,
    stickers,
    tags,
    searchTerm,
    isSearchingByGifs,
    total_gifs,
    total_stickers,
    isSearching,

    // ? METHODS
    startSearching,
    startSwitchingButton,
    startCleaningSearch,
  };
};
