import { createSlice } from '@reduxjs/toolkit';
export const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        isLinkCopid: false,
        isAlertOpen: false,
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
        } 
   }
});
export const { onCopyLink, onShowAlert, onCloseAlert  } = uiSlice.actions;