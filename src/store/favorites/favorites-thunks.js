import { collection, deleteDoc, doc, setDoc, getDocs  } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";




// export const loadNotes = async(uid = '') => { 
//     if (!uid) throw new Error(' user not exist ');
//     const collectionRef = collection(FirebaseDB, `${uid}/favorites/gifs`);
//     const docs = await getDocs(collectionRef);

//     const notes = [];

//     docs.forEach(doc => {
//         notes.push({ id: doc.id, ...doc.data() });
//     });

//     return notes
// }

export const onDeleteToFavoriteFibase  = (item) => {
    return async (dispatch, getState) => {
        const { uid } = getState().auth;
        const docRef = doc(FirebaseDB, `${uid}/giphys/giphy/${item}`);
        const resp = await deleteDoc(docRef);

        console.log(resp)

    }
}

export const onAddToFavoriteFibase  = (item) => {
    return async (dispatch, getState) => {
        const { uid } = getState().auth;
        console.log( uid )
        const newItem = {...item}
        const newDoc = doc(collection(FirebaseDB, `${uid}/giphys/giphy`), item.id);
        const resp = await setDoc(newDoc, newItem);
        console.log(resp)
        // newNote.id = newDoc.id;

        // // dispatch
        
        // dispatch(addNewEmptyNote(newNote));
        // dispatch(setActiveNote(newNote));
    }
}

