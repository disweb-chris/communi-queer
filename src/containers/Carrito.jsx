import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';
import styles from '../assets/styles/Carrito.module.css'

const Carrito = () => {
  const { state, dispatch } = useContext(AppContext);
  const { carrito } = state;
  const navigate = useNavigate();

  const handleCompra = () => {
    console.log('Navegando a /compra'); // Verificar que la función se está llamando
    navigate('/compra');
  };

  const handleRemoveItem = (id) => {
    dispatch({ type: 'REMOVE_FROM_CARRITO', payload: { id } });
  };

  console.log('Contenido del carrito:', carrito); // Agregar este log para verificar los datos

  return (
    <div className={styles.carritoContainer}>
      <h2>Carrito de Compras</h2>
      <ul className={styles.carritoList}>
        {carrito.map((item, index) => (
          <li key={index} className={styles.carritoItem}>
            <img src={item.image} alt={item.title} className={styles.itemImage} />
            <div className={styles.itemDetails}>
              <h3>{item.title}</h3>
              <p>${item.price}</p>
              <button onClick={() => handleRemoveItem(item.id)} className={styles.removeItemButton}>Eliminar</button>
            </div>
          </li>
        ))}
      </ul>
      <button onClick={handleCompra} className={styles.compraButton}>Proceder a la Compra</button>
    </div>
  );
};

export default Carrito;
