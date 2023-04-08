import {
  collection,
  deleteDoc,
  doc,
  setDoc,
  getDocs,
} from "firebase/firestore/lite";
import { FirebaseDB } from "/src/firebase/config";
import { removeEquals } from "/src/hooks/helpers/checkIfItemIsFavorite";
import {
  onGetAllFavoritesFromFirebase,
  onDeleteFavoritesToFirebase,
  onAddFavoritesToFirebase,
} from "./favorite-slice";

export const addAllFavoritesFromLocalStorageToFirebase = () => {
  const favoritesSavedOnLocalStorage = JSON.parse(
    localStorage.getItem("allFavorites")
  );
  return async (dispatch, getState) => {
    const { uid } = getState().auth;
    const collectionRef = collection(FirebaseDB, `${uid}/giphys/giphy`);
    const docs = await getDocs(collectionRef);
    const allFavorites = [];
    docs.forEach((doc) => {
      allFavorites.push({ id: doc.id, ...doc.data() });
    });

    const favoritesToSaveOnFirebase = removeEquals(
      allFavorites,
      favoritesSavedOnLocalStorage
    );

    favoritesToSaveOnFirebase.forEach(async (item) => {
      const newItem = { ...item, isFavorite: true, user: item.user || {} };
      const newDoc = doc(
        collection(FirebaseDB, `${uid}/giphys/giphy`),
        item.id
      );
      await setDoc(newDoc, newItem);
    });
    localStorage.removeItem("allFavorites");
    const newdocs = await getDocs(collectionRef);
    const newallFavorites = [];
    newdocs.forEach((doc) => {
      newallFavorites.push({ id: doc.id, ...doc.data() });
    });
    dispatch(onGetAllFavoritesFromFirebase(newallFavorites));
  };
};

export const getAllFavoritesFromFirebase = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;
    const collectionRef = collection(FirebaseDB, `${uid}/giphys/giphy`);
    const docs = await getDocs(collectionRef);
    let allFavorites = [];
    docs.forEach((doc) => {
      allFavorites.push({ id: doc.id, ...doc.data() });
    });
    dispatch(onGetAllFavoritesFromFirebase(allFavorites));
  };
};

export const deleteFavoriteToFirebase = (item) => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;
    const docRef = doc(FirebaseDB, `${uid}/giphys/giphy/${item}`);
    await deleteDoc(docRef);
    dispatch(onDeleteFavoritesToFirebase(item));
  };
};

export const addToFavoriteToFirebase = (item) => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;
    const newItem = { ...item, isFavorite: true, user: item.user || {} };
    const newDoc = doc(
      collection(FirebaseDB, `${uid}/giphys/giphy`),
      newItem.id
    );
    console.log(newItem);
    await setDoc(newDoc, newItem);
    dispatch(onAddFavoritesToFirebase(newItem));
  };
};
