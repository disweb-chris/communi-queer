import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
import { AppContext } from "../context/AppContext";

const Registro = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { dispatch } = useContext(AppContext);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    const auth = getAuth();
    const db = getDatabase();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      
      await set(ref(db, 'usuarios/' + user.uid), {
        email: user.email,
        uid: user.uid
      });
      
      dispatch({ type: "SET_USER", payload: user });
      navigate("/");
    } catch (error) {
      setError("Error al crear la cuenta: " + error.message);
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
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default Registro;
