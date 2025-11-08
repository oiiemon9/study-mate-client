import React, { createContext, useEffect, useState } from 'react';
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { auth } from './firebase.init';

export const AuthContext = createContext();

const googleProvider = new GoogleAuthProvider();

const FirebaseContext = ({ children }) => {
  const [loginUser, setLoginUser] = useState(null);
  const [loader, setLoader] = useState(true);

  const loginWithEmail = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const googleLogin = async () => {
    return signInWithPopup(auth, googleProvider);
  };

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoginUser(user);
      }
      setLoader(false);
    });
    return () => {
      unsubscribe;
    };
  }, []);

  const value = {
    googleLogin,
    setLoginUser,
    loginUser,
    loginWithEmail,
    loader,
    logout,
    login,
  };
  return <AuthContext value={value}>{children}</AuthContext>;
};

export default FirebaseContext;
