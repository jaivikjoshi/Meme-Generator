// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAyuactaXEJZJBTrN_dxa-o-0HGsfTZTiQ",
  authDomain: "meme-generator-2120e.firebaseapp.com",
  projectId: "meme-generator-2120e",
  storageBucket: "meme-generator-2120e.appspot.com",
  messagingSenderId: "115270163938",
  appId: "1:115270163938:web:23a49478568625c20dedbb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);