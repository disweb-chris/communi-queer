import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { getAuth, signOut } from "firebase/auth";
import { getDatabase, ref, get } from "firebase/database";
import styles from "../assets/styles/Header.module.css";

const Header = () => {
  const { state, dispatch } = useContext(AppContext);
  const [logoUrl, setLogoUrl] = useState('');

  useEffect(() => {
    const fetchLogoUrl = async () => {
      const db = getDatabase();
      const logoRef = ref(db, 'header/logo');
      const logoSnapshot = await get(logoRef);
      if (logoSnapshot.exists()) {
        setLogoUrl(logoSnapshot.val());
      } else {
        console.error("No se encontró el logo en la base de datos");
      }
    };

    fetchLogoUrl();
  }, []);

  const handleLogout = () => {
    const auth = getAuth();
    signOut(auth).then(() => {
      dispatch({ type: "SET_USER", payload: null });
    }).catch((error) => {
      console.error("Error al cerrar sesión: ", error);
    });
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link to="/">
          {logoUrl ? <img src={logoUrl} alt="Communi Queer Logo" className={styles.logoImage} /> : "Communi Queer"}
        </Link>
      </div>
      <nav className={styles.navLinks}>
        <Link to="/">Inicio</Link>
        {state.user ? (
          <>
            <Link to="/perfil">Perfil</Link>
            <Link to="/carrito">Mi carrito</Link>
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
