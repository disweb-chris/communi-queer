import React, { useContext, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getDatabase, ref, push } from "firebase/database";
import { AppContext } from "../context/AppContext";

const Compra = () => {
  const { state } = useContext(AppContext);
  const { id } = useParams(); // Obtener el ID del evento desde la URL
  const navigate = useNavigate();
  const [cantidad, setCantidad] = useState(1); // Estado para manejar la cantidad

  const event = state.events.find((event) => event.id === id); // Encontrar el evento correspondiente

  useEffect(() => {
    if (!event) {
      console.error("Evento no encontrado");
    } else if (!state.user) {
      navigate("/login"); // Redirigir a la página de inicio de sesión si no está autenticado
    }
  }, [event, state.user, navigate]);

  const handlePurchase = async () => {
    const db = getDatabase();
    try {
      await push(ref(db, 'compras'), {
        eventId: id,
        userId: state.user.uid,
        cantidad: cantidad, // Añadir la cantidad al registro de compra
        timestamp: Date.now()
      });
      alert('Compra realizada con éxito');
      navigate("/");
    } catch (error) {
      console.error("Error al realizar la compra: ", error.message);
    }
  };

  if (!event) {
    return <div>Evento no encontrado</div>;
  }

  return (
    <div>
      <h1>Comprar Entradas para {event.title}</h1>
      <p>Precio por entrada: ${event.price}</p>
      <label>
        Cantidad:
        <input
          type="number"
          min="1"
          value={cantidad}
          onChange={(e) => setCantidad(e.target.value)}
          required
        />
      </label>
      <p>Total: ${event.price * cantidad}</p>
      <button onClick={handlePurchase}>Comprar</button>
    </div>
  );
};

export default Compra;
