import React, { createContext, useReducer, useEffect } from "react";
import Reducer from "./Reducer";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const initialState = {
  user: null,
  events: [],
  carrito: [],
};

export const AppContext = createContext(initialState); // Creo el contexto con el estado inicial.

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => { // Veo los cambio de estado y envio la accion
      if (user) {
        dispatch({ type: "SET_USER", payload: user });
      } else {
        dispatch({ type: "SET_USER", payload: null });
      }
    });

    // Limpiar login
    return () => unsubscribe();
  }, []);                        // [] Vacio para que solo se ejecute una vez

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
