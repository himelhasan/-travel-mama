import React, { createContext } from "react";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from "../Firebase/firebase.config";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const googleLogIn = () => {
    return signInWithPopup(auth, provider);
  };

  const authInfo = { googleLogIn };

  return <AuthContext.Provider value={authInfo}> {children}</AuthContext.Provider>;
};

export default AuthProvider;
