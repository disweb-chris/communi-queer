import React, { useState, useContext, useEffect } from "react";
import { getDatabase, ref, get, update, query, orderByChild, equalTo } from "firebase/database";
import { getAuth, updateEmail } from "firebase/auth";
import { AppContext } from "../context/AppContext";
import styles from "../assets/styles/UserProfile.module.css";
import { db } from '../firebase'; 
import { motion } from 'framer-motion';

const UserProfile = () => {
  const { state, dispatch } = useContext(AppContext);
  const [email, setEmail] = useState("");
  const [userData, setUserData] = useState({});
  const [purchases, setPurchases] = useState([]);
  const auth = getAuth();

  useEffect(() => {
    if (state.user) {
      const db = getDatabase();
      const userRef = ref(db, 'usuarios/' + state.user.uid);

      get(userRef).then((snapshot) => {
        if (snapshot.exists()) {
          setUserData(snapshot.val());
          setEmail(snapshot.val().email);
        } else {
          console.log("No data available");
        }
      }).catch((error) => {
        console.error(error);
      });

      const purchasesRef = query(ref(db, 'compras'), orderByChild('userId'), equalTo(state.user.uid));

      get(purchasesRef).then((snapshot) => {
        if (snapshot.exists()) {
          const purchaseData = snapshot.val();
          const purchaseList = Object.keys(purchaseData).map(key => ({
            id: key,
            ...purchaseData[key]
          }));

          const eventPromises = purchaseList.map(purchase =>
            get(ref(db, 'events/' + purchase.eventId)).then(eventSnapshot => ({
              ...purchase,
              eventTitle: eventSnapshot.val().title,
              eventDate: eventSnapshot.val().date,
              eventImage: eventSnapshot.val().image // Obtener la URL de la imagen
            }))
          );

          Promise.all(eventPromises).then(purchasesWithDetails => {
            setPurchases(purchasesWithDetails);
          });
        } else {
          console.log("No data available");
        }
      }).catch((error) => {
        console.error("Error fetching purchase history: ", error);
      });
    }
  }, [state.user]);

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    const db = getDatabase();
    const userRef = ref(db, 'usuarios/' + state.user.uid);

    try {
      await updateEmail(auth.currentUser, email);
      await update(userRef, { email });
      dispatch({ type: "SET_USER", payload: { ...state.user, email } });
      alert('Perfil actualizado con éxito');
    } catch (error) {
      console.error("Error al actualizar el perfil: ", error);
    }
  };

  if (!state.user) {
    return <div>Cargando...</div>;
  }

  return (
    <motion.div 
      className={styles.profile}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1>Perfil de Usuario</h1>
      <div className={styles.section}>
        <form onSubmit={handleUpdateProfile} className={styles.form}>
          <h2>Actualizar Información</h2>
          <label>
            Correo electrónico:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <motion.button 
            type="submit" 
            className={styles.updateButton}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            Actualizar Perfil
          </motion.button>
        </form>
      </div>
      <div className={styles.section}>
        <h2>Historial de Compras</h2>
        {purchases.length > 0 ? (
          <motion.ul 
            className={styles.purchaseList}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, staggerChildren: 0.1 }}
          >
            {purchases.map((purchase) => (
              <motion.li 
                key={purchase.id} 
                className={styles.purchaseItem}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <img src={purchase.eventImage} alt={purchase.eventTitle} className={styles.eventImage} />
                <div className={styles.purchaseDetails}>
                  <p><strong>Evento:</strong> {purchase.eventTitle}</p>
                  <p><strong>Fecha del evento:</strong> {new Date(purchase.eventDate).toLocaleDateString()}</p>
                  <p><strong>Cantidad:</strong> {purchase.cantidad}</p>
                  <p><strong>Fecha de compra:</strong> {new Date(purchase.timestamp).toLocaleDateString()}</p>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        ) : (
          <p>No tienes compras registradas.</p>
        )}
      </div>
    </motion.div>
  );
};

export default UserProfile;
