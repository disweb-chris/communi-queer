import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const PrivateRoute = ({ children }) => {
  const { state } = useContext(AppContext);

  return state.user ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
