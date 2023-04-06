import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'checking',
        uid: null,
        email: null,
        displayName: null,
        photoURL: null,
        errorMessage: null,
        isLogginFormActive: true,
    },
    reducers: {
        login: (state, { payload }) => { 
            state.status = 'authenticated';
            state.uid = payload.uid;
            state.email= payload.email;
            state.displayName= payload.displayName;
            state.photoURL= payload.photoURL;
            state.errorMessage = null;
        },
        logout: (state, { payload }) => { 
            state.status= 'not-authenticated';
            state.email= null;
            state.displayName= null;
            state.photoURL= null;
            state.errorMessage = payload?.errorMessage;
        },
        checkingCrendentials: (state) => { 
            state.status = 'checking';
        },
        changeForm: (state) => {
            state.isLogginFormActive = !state.isLogginFormActive;
        }
    }
});
export const { login, logout, checkingCrendentials, changeForm } = authSlice.actions;