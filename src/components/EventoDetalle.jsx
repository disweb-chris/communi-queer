import React, { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import styles from "../assets/styles/EventoDetalle.module.css";

const EventoDetalle = () => {
  const { state, dispatch } = useContext(AppContext);
  const { id } = useParams(); // Obtener el ID del evento desde la URL
  const event = state.events.find((event) => event.id === id); // Encontrar el evento correspondiente

  if (!event) {
    return <div>Evento no encontrado</div>;
  }

  const handleAddToCart = () => {
    dispatch({ type: "ADD_TO_CARRITO", payload: event });
  };

  return (
    <div className={styles.eventDetail}>
      <h1>{event.title}</h1>
      <p>{event.description}</p>
      {event.image && <img src={event.image} alt={event.title} />}
      <div className={styles.eventInfo}>
        <p><strong>Fecha:</strong> {event.date}</p>
        <p><strong>Ubicación:</strong> {event.location}</p>
        <p><strong>Precio:</strong> ${event.price}</p>
      </div>
      <Link to="/carrito">
        <button className={styles.purchaseButton} onClick={handleAddToCart}>Comprar Entradas</button>
      </Link>
    </div>
  );
};

export default EventoDetalle;
