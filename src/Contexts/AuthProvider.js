import React, { createContext } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import app from "../Firebase/firebase.config";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  // google login
  const googleLogIn = () => {
    return signInWithPopup(auth, provider);
  };

  //  email password login
  const emailLogin = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password);
  };

  const createUserWithEmail = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // context value object
  const authInfo = { googleLogIn, emailLogin, createUserWithEmail };

  return <AuthContext.Provider value={authInfo}> {children}</AuthContext.Provider>;
};

export default AuthProvider;
