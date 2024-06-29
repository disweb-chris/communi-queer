import React, { createContext, useReducer } from "react";
import Reducer from "./Reducer";

const initialState = {
  user: null,
  events: [],
};

export const AppContext = createContext(initialState);

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
