import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AppContext';
import { getAuth, signOut } from 'firebase/auth';

function Layout({ children }) {
  const { state, logout } = useAuth();
  const auth = getAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  };

  return (
    <div>
      <header>
        <nav>
          <Link to="/">Home</Link>
          {state.user ? (
            <>
              <button onClick={handleLogout}>Cerrar sesión</button>
            </>
          ) : (
            <>
              <Link to="/login">Iniciar sesión</Link>
              <Link to="/signup">Registrarse</Link>
            </>
          )}
        </nav>
      </header>
      <main>
        {children}
      </main>
      <footer>
        <p>&copy; 2024 Communi Queer</p>
      </footer>
    </div>
  );
}

export default Layout;
