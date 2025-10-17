import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../Firebase/firebase.config";
import { useEffect, useState } from "react";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signInUser = (email, password) => {
    return signInWithEmailAndPassword((auth, email, password));
  };

  // onAuthStateChanged(auth, (currentUser) => {
  //   if (currentUser) {
  //     console.log("curent user if er vitor", currentUser);
  //   } else {
  //     console.log("inside else", currentUser);
  //   }
  // });

  // useEffect(() => {
  // setp-1: observer set
  // step-2: set in a variable
  // return and call the variable so that you can clear the ref
  // },[])

  useEffect(() => {
    // set the observer
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("current user in auth state change", currentUser);
      setUser(currentUser);
    });
    // clear the obserber on unMount
    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = {
    // createUser: createUser
    user,
    createUser,
    signInUser,
  };

  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
