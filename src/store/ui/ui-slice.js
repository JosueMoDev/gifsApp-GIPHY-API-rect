import { createSlice } from '@reduxjs/toolkit';
export const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        isLinkCopid: false,
        isAlertOpen: false,
        isSharingItem: false,
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
        }
   }
});
export const {
    onCopyLink, onShowAlert, onCloseAlert,
    onShareItem, onCloseSharingWindow
} = uiSlice.actions;