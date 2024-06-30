import React, { useState, useContext, useEffect } from "react";
import { getDatabase, ref, get, update, query, orderByChild, equalTo } from "firebase/database";
import { getAuth, updateEmail } from "firebase/auth";
import { AppContext } from "../context/AppContext";
import styles from "../assets/styles/UserProfile.module.css";
import { db } from '../firebase'; 

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
    <div className={styles.profile}>
      <h2>Perfil de Usuario</h2>
      <form onSubmit={handleUpdateProfile}>
        <label>
          Correo electrónico:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <button type="submit">Actualizar Perfil</button>
      </form>

      <div className={styles.purchaseHistory}>
        <h2>Historial de Compras</h2>
        {purchases.length > 0 ? (
          <ul className={styles.purchaseList}>
            {purchases.map((purchase) => (
              <li key={purchase.id} className={styles.purchaseItem}>
                <img src={purchase.eventImage} alt={purchase.eventTitle} className={styles.eventImage} />
                <div>
                  <p>Evento: {purchase.eventTitle}</p>
                  <p>Fecha del evento: {new Date(purchase.eventDate).toLocaleDateString()}</p>
                  <p>Cantidad: {purchase.cantidad}</p>
                  <p>Fecha de compra: {new Date(purchase.timestamp).toLocaleDateString()}</p>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p>No tienes compras registradas.</p>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
