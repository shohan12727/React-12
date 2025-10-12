// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNfQtnBkIYVkUs4L_BRKsH3YydyxAXEyc",
  authDomain: "pop-up-with.firebaseapp.com",
  projectId: "pop-up-with",
  storageBucket: "pop-up-with.firebasestorage.app",
  messagingSenderId: "987413997445",
  appId: "1:987413997445:web:33d73c310ac29c38e686ec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);