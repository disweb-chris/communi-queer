import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { AppContext } from "../context/AppContext";
import styles from "../assets/styles/Login.module.css";
import { motion } from 'framer-motion';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { dispatch } = useContext(AppContext);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const auth = getAuth();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      dispatch({ type: "SET_USER", payload: userCredential.user });
      navigate("/");
    } catch (error) {
      console.error("Error al iniciar sesión: ", error.message);
    }
  };

  return (
    <div className={styles.login}>
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
        Iniciar Sesión
      </motion.h2>
      <motion.form
        onSubmit={handleLogin}
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
          Iniciar Sesión
        </motion.button>
      </motion.form>
    </div>
  );
};

export default Login;
