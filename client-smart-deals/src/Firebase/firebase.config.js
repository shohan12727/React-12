import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD8UMxBZGYCiJfzEFz0NY8dXagvnVfGFSw",
  authDomain: "smart-deals-de0a2.firebaseapp.com",
  projectId: "smart-deals-de0a2",
  storageBucket: "smart-deals-de0a2.firebasestorage.app",
  messagingSenderId: "774714656585",
  appId: "1:774714656585:web:cc1d3cb95ca16cd19b3c98",
  measurementId: "G-EHQ9GGRWTR",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
