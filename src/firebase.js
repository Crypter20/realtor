import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPGIEOEldob67Yix-YJUYLNBCO8IwW_LA",
  authDomain: "real-estate-a7415.firebaseapp.com",
  projectId: "real-estate-a7415",
  storageBucket: "real-estate-a7415.appspot.com",
  messagingSenderId: "111703144436",
  appId: "1:111703144436:web:122f84d43cadd1ed08eba1",
  measurementId: "G-2DQX3KLBZ4",
};

initializeApp(firebaseConfig);
export const db = getFirestore();
