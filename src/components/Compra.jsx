import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getDatabase, ref, push } from "firebase/database";
import { AppContext } from "../context/AppContext";
import styles from "../assets/styles/Compra.module.css";

const Compra = () => {
  const { state, dispatch } = useContext(AppContext);
  const navigate = useNavigate();
  const [cantidad, setCantidad] = useState(1); // Estado para manejar la cantidad

  const { carrito, user } = state;

  useEffect(() => {
    if (carrito.length === 0) {
      console.error("Carrito vacío");
      navigate("/carrito"); // Redirigir a la página del carrito si está vacío
    } else if (!user) {
      navigate("/login"); // Redirigir a la página de inicio de sesión si no está autenticado
    }
  }, [carrito, user, navigate]);

  const handlePurchase = async () => {
    const db = getDatabase();
    try {
      for (const item of carrito) {
        await push(ref(db, 'compras'), {
          eventId: item.id,
          userId: user.uid,
          cantidad: cantidad,
          timestamp: Date.now()
        });
      }
      alert('Compra realizada con éxito');
      dispatch({ type: "CLEAR_CARRITO" });
      navigate("/");
    } catch (error) {
      console.error("Error al realizar la compra: ", error.message);
    }
  };

  if (carrito.length === 0) {
    return <div>Carrito vacío</div>;
  }

  const total = carrito.reduce((total, item) => total + item.price * cantidad, 0);

  return (
    <div className={styles.purchase}>
      <h1>Comprar Entradas</h1>
      <ul>
        {carrito.map((item, index) => (
          <li key={index}>
            {item.title} - ${item.price} x {cantidad}
          </li>
        ))}
      </ul>
      <label>
        Cantidad:
        <input
          type="number"
          min="1"
          value={cantidad}
          onChange={(e) => setCantidad(parseInt(e.target.value))}
          required
        />
      </label>
      <p>Total: ${total}</p>
      <button className={styles.purchaseButton} onClick={handlePurchase}>Comprar</button>
    </div>
  );
};

export default Compra;