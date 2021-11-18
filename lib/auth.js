import React, { useState, useEffect, useContext, createContext } from "react";
import firebase from "./firebase.js";
import { createUser } from "./db";
import {
  signInWithPopup,
  GithubAuthProvider,
  getAuth,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

const authContext = createContext();

const auth = getAuth();

export function AuthProvider({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => {
  return useContext(authContext);
};

function useProvideAuth() {
  const [user, setUser] = useState(null);

  const handleUser = (rawUser) => {
    if (rawUser) {
      const user = formatUser(rawUser);

      createUser(user.uid, user);
      setUser(user);
      return user;
    } else {
      setUser(false);
      return false;
    }
  };

  const signinWithGithub = () => {
    return signInWithPopup(auth, new GithubAuthProvider(firebase)).then(
      (response) => handleUser(response.user)
    );
  };

  const signout = () => {
    return signOut(auth).then(() => handleUser(false));
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(false);
      }
    });

    return () => unsubscribe();
  }, []);

  return {
    user,
    signinWithGithub,
    signout,
  };
}

const formatUser = (user) => {
  return {
    uid: user.uid,
    email: user.email,
    name: user.displayName,
    provider: user.providerData[0].providerId,
    photoUrl: user.photoURL,
  };
};
