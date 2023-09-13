
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCDJmIC96cMY3osOQ_EErqSskG7FCTx3vM",
  authDomain: "react-auth-56e86.firebaseapp.com",
  projectId: "react-auth-56e86",
  storageBucket: "react-auth-56e86.appspot.com",
  messagingSenderId: "201527906488",
  appId: "1:201527906488:web:a98d5aed606fde9166644d",
  measurementId: "G-0QXGNKSF99"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;