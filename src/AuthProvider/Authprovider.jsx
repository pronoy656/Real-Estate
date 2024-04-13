import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import app from "../Firebase/Firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const Authprovider = ({ children }) => {
  const [user, setUser] = useState(null);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //   signin method
  const userLogIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const userLogout = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const authUserValue = {
    user,
    createUser,
    userLogIn,
    userLogout,
  };
  return (
    <AuthContext.Provider value={authUserValue}>
      {children}
    </AuthContext.Provider>
  );
};

export default Authprovider;
