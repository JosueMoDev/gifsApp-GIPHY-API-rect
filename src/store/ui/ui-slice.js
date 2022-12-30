import { createSlice } from '@reduxjs/toolkit';
export const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        isLinkCopid: false,
        isAlertOpen: false,
        isSharingItem: false,
        isFlyMenuOpen: false,
        isAutoCompleteOpen: false, 
       
    },
    reducers: {
        onCopyLink:(state)=> {
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
        onCloseSharingWindow: ( state ) => { 
            state.isSharingItem = false
        },
        onOpenFlyMenu: ( state ) => { 
            state.isFlyMenuOpen = true; 
        },
        onCloseFlyMenu: ( state ) => { 
            state.isFlyMenuOpen = false; 
        },
        onOpenAutoComplete: (state) => { 
            state.isAutoCompleteOpen = true; 
        },
        onCloseAutoComplete: (state) => { 
            state.isAutoCompleteOpen = false; 
        }

   }
});
export const {
    onCopyLink, onShowAlert, onCloseAlert,
    onShareItem, onCloseSharingWindow,
    onOpenFlyMenu, onCloseFlyMenu, onOpenAutoComplete, onCloseAutoComplete
} = uiSlice.actions;