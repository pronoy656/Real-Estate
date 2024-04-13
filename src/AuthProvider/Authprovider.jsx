import { createContext, useState } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from "../Firebase/Firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const Authprovider = ({ children }) => {
  const [user, setUser] = useState(null);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const authUserValue = {
    user,
    createUser,
  };
  return (
    <AuthContext.Provider value={authUserValue}>
      {children}
    </AuthContext.Provider>
  );
};

export default Authprovider;
