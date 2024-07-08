import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getDatabase, ref, push } from "firebase/database";
import { AppContext } from "../context/AppContext";
import styles from "../assets/styles/Compra.module.css";

const Compra = () => {
  const { state, dispatch } = useContext(AppContext);
  const navigate = useNavigate();
  const [cantidades, setCantidades] = useState({}); // Estado para manejar las cantidades individuales

  const { carrito, user } = state;

  useEffect(() => {
    if (carrito.length === 0) {
      console.error("Carrito vacío");
      navigate("/carrito"); // Redirigir a la página del carrito si está vacío
    } else if (!user) {
      navigate("/login"); // Redirigir a la página de inicio de sesión si no está autenticado
    }

    // Inicializar las cantidades con 1 para cada elemento
    const initialCantidades = carrito.reduce((acc, item) => {
      acc[item.id] = 1;
      return acc;
    }, {});
    setCantidades(initialCantidades);
  }, [carrito, user, navigate]);

  const handlePurchase = async () => {
    const db = getDatabase();
    try {
      for (const item of carrito) {
        await push(ref(db, 'compras'), {
          eventId: item.id,
          userId: user.uid,
          cantidad: cantidades[item.id],
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

  const handleCantidadChange = (id, value) => {
    setCantidades({
      ...cantidades,
      [id]: value
    });
  };

  const handleRemoveItem = (id) => {
    dispatch({ type: 'REMOVE_FROM_CARRITO', payload: { id } });
    const newCantidades = { ...cantidades };
    delete newCantidades[id];
    setCantidades(newCantidades);
  };

  if (carrito.length === 0) {
    return <div>Carrito vacío</div>;
  }

  const total = carrito.reduce((total, item) => total + item.price * (cantidades[item.id] || 1), 0);

  return (
    <div className={styles.purchase}>
      <h1>Comprar Entradas</h1>
      <ul className={styles.purchaseList}>
        {carrito.map((item, index) => (
          <li key={index} className={styles.purchaseItem}>
            <img src={item.image} alt={item.title} />
            <span>{item.title} - ${item.price} x </span>
            <input
              type="number"
              min="1"
              value={cantidades[item.id]}
              onChange={(e) => handleCantidadChange(item.id, parseInt(e.target.value))}
              className={styles.cantidadInput}
              required
            />
            <button
              className={styles.removeItemButton}
              onClick={() => handleRemoveItem(item.id)}
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>
      <p>Total: ${total}</p>
      <button className={styles.purchaseButton} onClick={handlePurchase}>Comprar</button>
    </div>
  );
};

export default Compra;