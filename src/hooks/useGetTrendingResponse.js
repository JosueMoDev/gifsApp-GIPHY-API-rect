import { useEffect } from "react";
import { fetchTendringResponse } from "/src/api";
import { useDispatch, useSelector } from "react-redux";
import { onSetTrending } from "/src/store";
import { checkIfItemIsFavorite } from "./helpers/checkIfItemIsFavorite";
import { useSetUi } from "./useSetUi";

export const useGetTrendingResponse = () => {
  const dispatch = useDispatch();
  const { allFavorites } = useSelector((state) => state.favorites);
  const { gifs, searchTerm } = useSelector((state) => state.search);
  const { startClear } = useSetUi();
  const getTrendingGiphys = async () => {
    const ApiResponse = await fetchTendringResponse();
    const data = ApiResponse.data.data.map((gifs) => gifs);
    const trendingList = data.map((item) => ({
      id: item.id,
      title: item.title,
      url: item.images.original.webp,
      type: item.type,
      slug: item.slug,
      user: item.user,
    }));
    startSettingData(trendingList);
  };
  const startSettingData = (trendingList) => {
    const gifs_list = checkIfItemIsFavorite(trendingList, allFavorites);
    dispatch(onSetTrending(gifs_list));
  };
  const startCleanigHome = () => {
    startClear();
    getTrendingGiphys();
  };
  useEffect(() => {
    if (!searchTerm) {
      getTrendingGiphys();
    }
  }, [allFavorites]);

  return { gifs, startCleanigHome };
};
