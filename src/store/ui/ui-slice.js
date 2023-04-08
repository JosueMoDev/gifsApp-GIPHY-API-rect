import { createSlice } from "@reduxjs/toolkit";
export const uiSlice = createSlice({
  name: "ui",
  initialState: {
    alertMessage: "",
    statusAlert: false,
    isLinkCopid: false,
    isAlertOpen: false,
    authAlertOpen: false,
    isSharingItem: false,
    isFlyMenuOpen: false,
    isAutoCompleteOpen: false,
    isDrawerAuthOpen: false,
  },
  reducers: {
    onCopyLink: (state) => {
      state.isLinkCopid = true;
    },
    onShowAlert: (state) => {
      state.isAlertOpen = true;
    },
    onCloseAlert: (state) => {
      state.isAlertOpen = false;
      state.isLinkCopid = false;
    },
    onShareItem: (state) => {
      state.isSharingItem = true;
    },
    onCloseSharingWindow: (state) => {
      state.isSharingItem = false;
    },
    onOpenFlyMenu: (state) => {
      state.isFlyMenuOpen = true;
    },
    onCloseFlyMenu: (state) => {
      state.isFlyMenuOpen = false;
    },
    onOpenAutoComplete: (state) => {
      state.isAutoCompleteOpen = true;
    },
    onCloseAutoComplete: (state) => {
      state.isAutoCompleteOpen = false;
    },
    onShowAuthAlert: (state, { payload }) => {
      state.authAlertOpen = true;
      state.statusAlert = payload.statusAlert;
      state.alertMessage = payload.alertMessage;
    },
    onCloseAuthAlert: (state) => {
      state.authAlertOpen = false;
      state.alertMessage = "";
    },
    onToggleSideNavAuth: (state) => {
      state.isDrawerAuthOpen = !state.isDrawerAuthOpen;
    },
  },
});
export const {
  onCopyLink,
  onShowAlert,
  onCloseAlert,
  onShareItem,
  onCloseSharingWindow,
  onOpenFlyMenu,
  onCloseFlyMenu,
  onOpenAutoComplete,
  onCloseAutoComplete,
  onCloseAuthAlert,
  onShowAuthAlert,
  onToggleSideNavAuth,
} = uiSlice.actions;
