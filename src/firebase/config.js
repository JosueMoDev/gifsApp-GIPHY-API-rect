// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite'
import { getAnalytics } from "firebase/analytics";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqoYP7wXjA_tisHYI-1TKBii3LljL8Fjw",
  authDomain: "giphy-clone-6d986.firebaseapp.com",
  projectId: "giphy-clone-6d986",
  storageBucket: "giphy-clone-6d986.appspot.com",
  messagingSenderId: "684540930335",
  appId: "1:684540930335:web:ec9b88e7ccd3b61eb7682a",
  measurementId: "G-4F69Q1F2CM"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp)
export const analytics = getAnalytics(FirebaseApp);