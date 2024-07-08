import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { db } from "../firebase"; // Importar la instancia de la base de datos inicializada
import { ref, get, child } from "firebase/database";
import { AppContext } from "../context/AppContext";
import styles from "../assets/styles/Home.module.css";
import { motion } from 'framer-motion';


const Home = () => {
  const { state, dispatch } = useContext(AppContext); // Usar contexto global

  useEffect(() => {
    const fetchEvents = async () => {
      const dbRef = ref(db); // Referencia a la base de datos inicializada
      try {
        const snapshot = await get(child(dbRef, "events")); // Obtener datos del nodo 'events'
        if (snapshot.exists()) {
          const eventsData = snapshot.val();
          const eventsList = Object.keys(eventsData).map(key => ({
            id: key,
            ...eventsData[key]
          }));
          dispatch({ type: "SET_EVENTS", payload: eventsList }); // Actualizar el estado con los eventos
        } else {
          console.log("Data no valida");
        }
      } catch (error) {
        console.error("Error fetching eventos: ", error); // Manejo de errores
      }
    };

    fetchEvents(); // Llamar a la función para obtener eventos
  }, [dispatch]); // Ejecutar solo una vez al montar el componente

  return (
    <div className={styles.home}>
      {/* Sección del banner */}
      <div className={styles.banner}>
        <motion.div 
          className={styles.bannerContent}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2>Bienvenidos a CommuniQueer</h2>
          <p>Descubre y participa en los eventos más interesantes y diversos.</p>
        </motion.div>
      </div>

      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Eventos
      </motion.h1>
      <div className={styles.eventList}>
        {state.events.map((event, index) => (
          <motion.div 
            key={event.id} 
            className={styles.event}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          >
            <Link to={`/evento/${event.id}`}>
              <h2>{event.title}</h2>
              {event.image && <img src={event.image} alt={event.title} />}
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Home;