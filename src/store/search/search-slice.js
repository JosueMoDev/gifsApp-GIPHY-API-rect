import { createSlice } from "@reduxjs/toolkit";
const searchTerm = JSON.parse(sessionStorage.getItem("searchTerm"));
export const searchSlice = createSlice({
  name: "search",
  initialState: {
    isSearching: false,
    searchTerm: searchTerm || "",
    gifs: [],
    total_gifs: null,
    stickers: [],
    total_stickers: null,
    tags: [],
    favorites: [],
    isSearchingByGifs: true,
  },
  reducers: {
    onSearching: (state, { payload }) => {
      state.isSearching = true;
      state.searchTerm = payload;
      sessionStorage.setItem("searchTerm", JSON.stringify(state.searchTerm));
      state.gifs = [];
      state.total_gifs = null;
      state.stickers = [];
      state.total_stickers = null;
      state.tags = [];
    },
    onSetData: (state, { payload }) => {
      const { gifs_list, total_gifs, stickers_list, total_stickers, tagsList } =
        payload;
      // * here set gifs data
      state.gifs = gifs_list;
      state.total_gifs = total_gifs;

      // * here set stickers data
      state.stickers = stickers_list;
      state.total_stickers = total_stickers;

      // * here set tags data
      state.tags = tagsList;

      state.isSearching = false;
    },
    onReloadData: (state, { payload }) => {
      const { gifs_list, stickers_list } = payload;
      state.gifs = gifs_list;
      state.stickers = stickers_list;
    },

    onChangeView: (state) => {
      state.isSearchingByGifs = !state.isSearchingByGifs;
    },
    onClearSearch: (state) => {
      sessionStorage.removeItem("searchTerm");
      state.searchTerm = "";
      state.isSearching = false;
      state.gifs = [];
      state.total_gifs = null;
      state.stickers = [];
      state.total_stickers = null;
      state.tags = [];
    },
    onSetTrending: (state, { payload }) => {
      state.gifs = payload;
    },
  },
});
export const {
  onSearching,
  onSetData,
  onChangeView,
  onClearSearch,
  onReloadData,
  onSetTrending,
} = searchSlice.actions;
