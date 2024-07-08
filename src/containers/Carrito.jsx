import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';
import styles from '../assets/styles/Carrito.module.css'
import { motion } from 'framer-motion';

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

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        duration: 0.5
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div 
      className={styles.carritoContainer}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <h2>Carrito de Compras</h2>
      <motion.ul className={styles.carritoList} variants={containerVariants}>
        {carrito.map((item, index) => (
          <motion.li 
            key={index} 
            className={styles.carritoItem}
            variants={itemVariants}
          >
            <img src={item.image} alt={item.title} className={styles.itemImage} />
            <div className={styles.itemDetails}>
              <h3>{item.title}</h3>
              <p>${item.price}</p>
              <motion.button 
                onClick={() => handleRemoveItem(item.id)} 
                className={styles.removeItemButton}
                whileHover={{ scale: 1.05, backgroundColor: '#c0392b' }}
                transition={{ duration: 0.2 }}
              >
                Eliminar
              </motion.button>
            </div>
          </motion.li>
        ))}
      </motion.ul>
      <motion.button 
        onClick={handleCompra} 
        className={styles.compraButton}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
      >
        Proceder a la Compra
      </motion.button>
    </motion.div>
  );
};

export default Carrito;
