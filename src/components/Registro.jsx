import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
import { AppContext } from "../context/AppContext";

const Registro = () => {
  const [email, setEmail] = useState("");  // Estado para manejar el email
  const [password, setPassword] = useState("");  // Estado para manejar la contraseña
  const { dispatch } = useContext(AppContext);  // Usar el contexto de la aplicación
  const navigate = useNavigate();  // Hook de navegación

  const handleRegister = async (e) => {
    e.preventDefault();  // Prevenir el comportamiento por defecto del formulario
    const auth = getAuth();  // Obtener la instancia de autenticación
    const db = getDatabase();  // Obtener la instancia de la base de datos
    try {
      // Crear un nuevo usuario con correo y contraseña
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;  // Obtener el usuario autenticado
      
      // Guardar los datos del usuario en Realtime Database
      await set(ref(db, 'usuarios/' + user.uid), {
        email: user.email,
        uid: user.uid
      });
      
      // Actualizar el estado global de la aplicación
      dispatch({ type: "SET_USER", payload: user });
      navigate("/");  // Navegar a la página principal
    } catch (error) {
      console.error("Error al crear la cuenta: ", error.message);  // Manejo de errores
    }
  };

  return (
    <div>
      <h2>Crear Cuenta</h2>
      <form onSubmit={handleRegister}>
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Crear Cuenta</button>
      </form>
    </div>
  );
};

export default Registro;
