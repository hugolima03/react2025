import React, { useState, useEffect, useContext, createContext } from "react";
import firebase from "./firebase.js";
import {
  signInWithPopup,
  GithubAuthProvider,
  getAuth,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

const authContext = createContext();

export function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}
export const useAuth = () => {
  return useContext(authContext);
};

const auth = getAuth();
function useProvideAuth() {
  const [user, setUser] = useState(null);

  const signinWithGithub = () => {
    return signInWithPopup(auth, new GithubAuthProvider(firebase)).then(
      (response) => {
        setUser(response.user);
        return response.user;
      }
    );
  };

  const signout = () => {
    return signOut(auth).then(() => {
      setUser(false);
    });
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
