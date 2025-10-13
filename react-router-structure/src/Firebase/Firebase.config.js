// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCzB2lnPLRbP9gOgJD4Ipj5cIZyhDYHLBg",
  authDomain: "email-password-authenticaiton.firebaseapp.com",
  projectId: "email-password-authenticaiton",
  storageBucket: "email-password-authenticaiton.firebasestorage.app",
  messagingSenderId: "387945281265",
  appId: "1:387945281265:web:6fd01484bd0b7e29495b50"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service

export const auth = getAuth(app);