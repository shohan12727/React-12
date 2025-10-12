import React, { useState } from "react";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../Firebase/Firebase.config";

const provider = new GoogleAuthProvider();

const Login = () => {
  const [user, setUser] = useState(null);

  const handleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((res) => {
        console.log(res.user);
        setUser(res.user);
      })
      .catch((err) => console.log(err));
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("User signed out successfully");
        setUser(null); 
      })
      .catch((err) => console.error("Sign out error:", err));
  };

  return (
    <div>
      <button onClick={handleSignIn}>Sign in</button>
      <button onClick={handleSignOut}>Sign out</button>

      {user && (
        <>
          <h2>Name: {user?.displayName}</h2>
          <h2>email: {user?.email}</h2>
        </>
      )}
    </div>
  );
};

export default Login;
