import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
import { AppContext } from "../context/AppContext";
import styles from "../assets/styles/Registro.module.css";
import { motion } from 'framer-motion';

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
    <div className={styles.register}>
      <motion.div
        className={styles.background}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
      />
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Crear Cuenta
      </motion.h2>
      <motion.form
        onSubmit={handleRegister}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.label
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Correo electrónico:
          <input
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </motion.label>
        <motion.label
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Contraseña:
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </motion.label>
        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          Crear Cuenta
        </motion.button>
      </motion.form>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default Registro;
