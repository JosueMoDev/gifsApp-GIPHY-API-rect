import { createSlice } from "@reduxjs/toolkit";
const itemSelected = JSON.parse(sessionStorage.getItem("itemSelected"));
const tagsItemSelected = JSON.parse(sessionStorage.getItem("tagsItemSelected"));
const itemGifsRelated = JSON.parse(sessionStorage.getItem("itemGifsRelated"));
export const showItemSlice = createSlice({
  name: "showItem",
  initialState: {
    item: itemSelected || {},
    itemTags: tagsItemSelected || [],
    itemGifsRelated: itemGifsRelated || [],
    item_id: null,
    user: {},
    tagsTerms: null,
  },
  reducers: {
    onSearchingItemById: (state, { payload }) => {
      state.item_id = payload.id;
      state.tagsTerms = payload.name;
      state.user = payload.user;
    },
    onShowItem: (state, { payload }) => {
      state.item = payload;
      sessionStorage.setItem("itemSelected", JSON.stringify(state.item));
    },
    onSetItemTags: (state, { payload }) => {
      state.itemTags = payload;
      sessionStorage.setItem(
        "tagsItemSelected",
        JSON.stringify(state.itemTags)
      );
    },
    onSetGifsRelated: (state, { payload }) => {
      state.itemGifsRelated = payload;
      sessionStorage.setItem(
        "itemGifsRelated",
        JSON.stringify(state.itemGifsRelated)
      );
    },
    onClearItem: (state) => {
      sessionStorage.removeItem("itemSelected");
      state.item = {};

      sessionStorage.removeItem("tagsItemSelected");
      state.itemTags = [];

      sessionStorage.removeItem("itemGifsRelated");
      state.itemGifsRelated = [];

      state.item_id = null;
      state.user = {};
      state.tagsTerms = null;
    },
  },
});
export const {
  onSearchingItemById,
  onShowItem,
  onSetItemTags,
  onSetGifsRelated,
  onClearItem,
} = showItemSlice.actions;
