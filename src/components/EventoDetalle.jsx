import React, { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const EventoDetalle = () => {
  const { state } = useContext(AppContext);
  const { id } = useParams(); // Obtener el ID del evento desde la URL
  const event = state.events.find((event) => event.id === id); // Encontrar el evento correspondiente

  if (!event) {
    return <div>Evento no encontrado</div>;
  }

  return (
    <div>
      {event.image && <img src={event.image} alt={event.title} />}
      <h1>{event.title}</h1>
      <p>Fecha: {event.date}</p>
      <p>{event.location}</p>
      <p>Precio: ${event.price}</p>
      <p>{event.description}</p>
      <Link to={`/compra/${event.id}`}>
        <button>Comprar Entradas</button>
      </Link>
    </div>
  );
};

export default EventoDetalle;
