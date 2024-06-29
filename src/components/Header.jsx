import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Header = () => {
  const { state, dispatch } = useContext(AppContext);

  const handleLogout = () => {
    dispatch({ type: "SET_USER", payload: null });
  };

  return (
    <header>
      <nav>
        <Link to="/">Inicio</Link>
        {state.user ? (
          <>
            <Link to="/perfil">Perfil</Link>
            <button onClick={handleLogout}>Cerrar Sesión</button>
          </>
        ) : (
          <>
            <Link to="/login">Iniciar Sesión</Link>
            <Link to="/registro">Registrarse</Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
