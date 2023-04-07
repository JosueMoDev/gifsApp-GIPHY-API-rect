import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FirebaseAuth } from "../firebase/config";
import { login, logout } from "../store/auth";
import { allFavoritesFirebase } from "../store/favorites"

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
      dispatch(allFavoritesFirebase());
    });
  }, []);
  return {
    status,
    displayName,
    uid,
    photoURL,
    isLogginFormActive,
    passwordVisibility,
  };
};
