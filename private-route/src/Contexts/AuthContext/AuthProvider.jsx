import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../../Firebase/firebase.config";
import { useEffect, useState } from "react";




const AuthProvider = ({ children }) => {

const googleProvider = new GoogleAuthProvider()

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signInUser = (email, password) => {
    setLoading(true)
    console.log(email, password)
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signInWIthGoogle = () => {
    setLoading(true)
    signInWithPopup(auth, googleProvider);
  }

    const signOutUser = () => {
      setLoading(true)
    return signOut(auth);
  };

  useEffect(() => {
    // set the observer
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("current user in auth state change", currentUser);
      setUser(currentUser);
      setLoading(false);
    });
    // clear the obserber on unMount
    return () => {
      unSubscribe();
    };
  }, []);



  const authInfo = {
    // createUser: createUser
    user,
    loading,
    createUser,
    signInUser,
    signInWIthGoogle,
    signOutUser,
  };

  return (
    <AuthContext value={authInfo}>{children}</AuthContext>
  );
};

export default AuthProvider;
