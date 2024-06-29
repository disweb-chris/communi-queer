import React, { useContext, useEffect, useState } from "react";
import { getDatabase, ref, query, orderByChild, equalTo, get } from "firebase/database";
import { AppContext } from "../context/AppContext";

const PurchaseHistory = () => {
  const { state } = useContext(AppContext);
  const [purchases, setPurchases] = useState([]);

  useEffect(() => {
    if (state.user) {
      const db = getDatabase();
      const purchasesRef = query(ref(db, 'compras'), orderByChild('userId'), equalTo(state.user.uid));
  
      get(purchasesRef).then((snapshot) => {
        if (snapshot.exists()) {
          const purchaseData = snapshot.val();
          const purchaseList = Object.keys(purchaseData).map(key => ({
            id: key,
            ...purchaseData[key]
          }));
          setPurchases(purchaseList);
        } else {
          console.log("No data available");
        }
      }).catch((error) => {
        console.error("Error fetching purchase history: ", error);
      });
    }
  }, [state.user]);

  if (!state.user) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <h2>Historial de Compras</h2>
      {purchases.length > 0 ? (
        <ul>
          {purchases.map((purchase) => (
            <li key={purchase.id}>
              Evento: {purchase.eventId}, Cantidad: {purchase.cantidad}, Fecha: {new Date(purchase.timestamp).toLocaleString()}
            </li>
          ))}
        </ul>
      ) : (
        <p>No tienes compras registradas.</p>
      )}
    </div>
  );
};

export default PurchaseHistory;
