import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../Firebase/firebase.config";

const AuthProvider = ({ children }) => {
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signInUser = (email, password) => {
    return signInWithEmailAndPassword((auth, email, password));
  };

  onAuthStateChanged(auth, (currentUser) => {
    if (currentUser) {
      console.log("curent user if er vitor", currentUser);
    } else {
      console.log("inside else", currentUser);
    }
  });

  const authInfo = {
    // createUser: createUser
    createUser,
    signInUser,
  };

  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
