import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAlUsLbC1Bp5OEdsezDbnb6o47a4CbmltY",
  authDomain: "receiptvault-d5a99.firebaseapp.com",
  projectId: "receiptvault-d5a99",
  storageBucket: "receiptvault-d5a99.firebasestorage.app",
  messagingSenderId: "1078057226718",
  appId: "1:1078057226718:web:f1a76a75a4865256364d4f",
  measurementId: "G-SS86Y197YZ"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();