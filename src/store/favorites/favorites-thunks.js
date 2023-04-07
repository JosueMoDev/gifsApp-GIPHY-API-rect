import { collection, deleteDoc, doc, setDoc, getDocs  } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { removeEquals } from "../../hooks/helpers/checkIfItemIsFavorite";
import { onAddFavoritesFromFirebase } from "./favorite-slice";

const favoritesFromLocalStorage = () => {
    const allFavoritesFromStorage = JSON.parse(localStorage.allFavorites);
    return allFavoritesFromStorage
}

export const allFavoritesFirebase = () => { 
    return async (dispatch, getState) => {
        const { uid } = getState().auth;
        const collectionRef = collection(FirebaseDB, `${uid}/giphys/giphy`);
        const docs = await getDocs(collectionRef);
        const allFavorites = [];
        docs.forEach(doc => {
            allFavorites.push({ id: doc.id, ...doc.data() });
        });
        if (localStorage.allFavorites) {
            const favoritesSavedOnLocalStorage = favoritesFromLocalStorage()
            const favoritesToSaveOnFirebase = removeEquals(allFavorites, favoritesSavedOnLocalStorage);
            favoritesToSaveOnFirebase.forEach(async (item) => {
                const newItem = { ...item, isFavorite: true }
                const newDoc = doc(collection(FirebaseDB, `${uid}/giphys/giphy`), item.id);
                await setDoc(newDoc, newItem)
            });
            localStorage.removeItem('allFavorites');
            const docs = await getDocs(collectionRef);
            const allFavorites = [];
            docs.forEach(doc => {
                allFavorites.push({ id: doc.id, ...doc.data() });
            });
        }

        dispatch(onAddFavoritesFromFirebase(allFavorites))
    }
}

export const onDeleteToFavoriteFibase  = (item) => {
    return async (dispatch, getState) => {
        const { uid } = getState().auth;
        const docRef = doc(FirebaseDB, `${uid}/giphys/giphy/${item}`);
        const resp = await deleteDoc(docRef);
        if (!resp) {
            allFavoritesFirebase();
        }
    }
}

export const onAddToFavoriteFibase  = (item) => {
    return async (dispatch, getState) => {
        const { uid } = getState().auth;
        const newItem = {...item, isFavorite: true}
        const newDoc = doc(collection(FirebaseDB, `${uid}/giphys/giphy`), item.id);
        const resp = await setDoc(newDoc, newItem);   
        if (!resp) {
            allFavoritesFirebase();
        }
    }
}

