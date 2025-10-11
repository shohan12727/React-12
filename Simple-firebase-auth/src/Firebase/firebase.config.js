// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATkvidf88OUzJaq4tVuluoL_VvPYL5XjI",
  authDomain: "simple-firebase-auth-001-1be1e.firebaseapp.com",
  projectId: "simple-firebase-auth-001-1be1e",
  storageBucket: "simple-firebase-auth-001-1be1e.firebasestorage.app",
  messagingSenderId: "187353493793",
  appId: "1:187353493793:web:3673c93889b46f7b08ce60"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export  const auth = getAuth(app);

