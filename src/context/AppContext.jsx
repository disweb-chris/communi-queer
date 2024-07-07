import React, { createContext, useReducer, useEffect } from "react";
import Reducer from "./Reducer";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const initialState = {
  user: null,
  events: [],
  carrito: [],
};

export const AppContext = createContext(initialState);

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch({ type: "SET_USER", payload: user });
      } else {
        dispatch({ type: "SET_USER", payload: null });
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
