import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { db } from "../firebase"; // Importar la instancia de la base de datos inicializada
import { ref, get, child } from "firebase/database";
import { AppContext } from "../context/AppContext";
import styles from "../assets/styles/Home.module.css";

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
      <h1>Eventos</h1>
      <div className={styles.eventList}>
        {state.events.map((event) => (
          <div key={event.id} className={styles.event}>
            <Link to={`/evento/${event.id}`}>
              <h2>{event.title}</h2>
              <p>{event.description}</p>
              {event.image && <img src={event.image} alt={event.title} />}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
