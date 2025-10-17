// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXOyjIWiQqKrbjn0tTmahojf6Xw7Brmi0",
  authDomain: "private-route-and-auth.firebaseapp.com",
  projectId: "private-route-and-auth",
  storageBucket: "private-route-and-auth.firebasestorage.app",
  messagingSenderId: "102109192797",
  appId: "1:102109192797:web:d0e2b15e2e474e4de523b4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
