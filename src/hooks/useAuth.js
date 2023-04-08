import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FirebaseAuth } from "/src/firebase/config";
import { login, logout } from "/src/store/auth";
import {
  getAllFavoritesFromFirebase,
  addAllFavoritesFromLocalStorageToFirebase,
} from "/src/store/favorites";

export const useAuth = () => {
  const {
    status,
    displayName,
    uid,
    photoURL,
    isLogginFormActive,
    passwordVisibility,
  } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(FirebaseAuth, async (user) => {
      if (!user) return dispatch(logout());
      const { uid, photoURL, email, displayName } = user;
      dispatch(login({ uid, photoURL, email, displayName }));
      if ("allFavorites" in localStorage) {
        dispatch(addAllFavoritesFromLocalStorageToFirebase());
      } else {
        dispatch(getAllFavoritesFromFirebase());
      }
    });
  }, []);
  return {
    // ? Properties
    status,
    displayName,
    uid,
    photoURL,
    isLogginFormActive,
    passwordVisibility,
  };
};
