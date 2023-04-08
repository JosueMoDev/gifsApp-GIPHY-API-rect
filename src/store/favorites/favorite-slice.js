import { createSlice } from "@reduxjs/toolkit";
const allFavorites = JSON.parse(localStorage.getItem("allFavorites"));

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    allFavorites: allFavorites || [],
  },

  reducers: {
    onAddToFavoritesToLocalStorage: (state, { payload }) => {
      if (payload.id) {
        state.allFavorites = [
          ...state.allFavorites,
          { ...payload, isFavorite: true },
        ];
        localStorage.setItem(
          "allFavorites",
          JSON.stringify(state.allFavorites)
        );
      }
    },

    onGetAllFavoritesFromFirebase: (state, { payload }) => {
      state.allFavorites = [...payload];
    },

    onAddFavoritesToFirebase: (state, { payload }) => {
      state.allFavorites = [...state.allFavorites, payload];
    },

    onDeleteFavoritesToFirebase: (state, { payload }) => {
      state.allFavorites = state.allFavorites.filter(
        (item) => item.id !== payload
      );
    },

    onDeleteToFavotiesToLocalStorage: (state, { payload }) => {
      state.allFavorites = state.allFavorites.filter(
        (item) => item.id !== payload
      );
      localStorage.setItem("allFavorites", JSON.stringify(state.allFavorites));
    },
    onCleanFavorites: (state) => {
      state.allFavorites = [];
    },
  },
});
export const {
  onAddFavoritesToFirebase,
  onGetAllFavoritesFromFirebase,
  onDeleteFavoritesToFirebase,
  onAddToFavoritesToLocalStorage,
  onDeleteToFavotiesToLocalStorage,
  onCleanFavorites,
} = favoritesSlice.actions;
