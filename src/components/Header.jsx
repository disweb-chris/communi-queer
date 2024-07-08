import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { getAuth, signOut } from "firebase/auth";
import { getDatabase, ref, get } from "firebase/database";
import styles from "../assets/styles/Header.module.css";

const Header = () => {
  const { state, dispatch } = useContext(AppContext);
  const [logoUrl, setLogoUrl] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

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

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link to="/" onClick={closeMenu}>
          {logoUrl ? <img src={logoUrl} alt="Communi Queer Logo" className={styles.logoImage} /> : "Communi Queer"}
        </Link>
      </div>
      <div className={styles.hamburger} onClick={toggleMenu}>
        &#9776;
      </div>
      <nav className={`${styles.navLinks} ${menuOpen ? styles.showMenu : ''}`}>
        <Link to="/" onClick={closeMenu}>Inicio</Link>
        {state.user ? (
          <>
            <Link to="/perfil" onClick={closeMenu}>Perfil</Link>
            <Link to="/carrito" onClick={closeMenu}>Mi carrito</Link>
            <button onClick={() => { handleLogout(); closeMenu(); }}>Cerrar Sesión</button>
          </>
        ) : (
          <>
            <Link to="/login" onClick={closeMenu}>Iniciar Sesión</Link>
            <Link to="/registro" className={styles.buttonLink} onClick={closeMenu}>Registrarse</Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
