import React, { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import styles from "../assets/styles/EventoDetalle.module.css";
import { motion } from 'framer-motion';

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
    <motion.div 
      className={styles.eventDetail}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        className={styles.eventHeader}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h1>{event.title}</h1>
        {event.image && (
          <img
            src={event.image}
            alt={event.title}
            className={styles.mobileEventImage}
          />
        )}
        <p className={styles.mobileEventDescription}>{event.descriptionShort}</p>
      </motion.div>
      <motion.div 
        className={styles.eventContent}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <div className={styles.eventInfo}>
          <p>{event.description}</p>
          <div className={styles.eventDetails}>
            <p><strong>📅 Fecha:</strong> {event.date}</p>
            <p><strong>📍 Lugar:</strong> {event.location}</p>
            <p><strong>🎟️ Precio:</strong> ${event.price}</p>
          </div>
          <Link to="/carrito">
            <motion.button 
              className={styles.purchaseButton} 
              onClick={handleAddToCart}
              whileHover={{ scale: 1.05, backgroundColor: '#0056b3' }}
              transition={{ duration: 0.2 }}
            >
              Comprar Entradas
            </motion.button>
          </Link>
        </div>
        <motion.div 
          className={styles.rightColumn}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {event.image && (
            <img
              src={event.image}
              alt={event.title}
              className={styles.desktopEventImage}
            />
          )}
          <div className={styles.promoSection}>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/communi-queer.appspot.com/o/eventos%2Frecital-de-jazz.jpg?alt=media&token=b9a3a21d-995b-4c42-9571-9f076d6f3e99"
              alt="Promoción Especial"
              className={styles.promoImage}
            />
            <div className={styles.promoText}>
              <h2>¡No te pierdas nuestra promoción especial!</h2>
              <p>Compra tus entradas ahora y obtén un descuento exclusivo en tus próximas compras.</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default EventoDetalle;