// import React, { useState, createContext } from "react";
// export let AuthContextApi = createContext();

// let AuthProvider = ({ children }) => {
//   let [IsAuth, setIsAuth] = useState(true);
//   return (
//     <AuthContextApi.Provider value={IsAuth}>{children}</AuthContextApi.Provider>
//   );
// };
// export default AuthProvider;

// using firebase to update multiple states
import React, { useEffect, useState, createContext } from "react";
import Spinner from "../pages/spinners/Spinner";

import firebase from "./../firebase";
export let AuthContextApi = createContext();

const AuthProvider = ({ children }) => {
  let [state, setState] = useState("");
  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      if (user.emailVerified === true || user.reauthenticateWithPhoneNumber) {
        setState(user);
      } else {
        setState(null);
      }
    });
  }, []);
  return (
    <AuthContextApi.Provider value={state}>
      {children}
      {/* {state === null ? <Spinner /> : children} */}
    </AuthContextApi.Provider>
  );
};

export default AuthProvider;
