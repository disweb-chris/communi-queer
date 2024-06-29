import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { getAuth, signOut } from "firebase/auth";

const Header = () => {
  const { state, dispatch } = useContext(AppContext);

  const handleLogout = () => {
    const auth = getAuth();
    signOut(auth).then(() => {
      dispatch({ type: "SET_USER", payload: null });
    }).catch((error) => {
      console.error("Error al cerrar sesión: ", error);
    });
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
