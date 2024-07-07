import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';

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
    <div>
      <h2>Carrito de Compras</h2>
      <ul>
        {carrito.map((item, index) => (
          <li key={index}>
            {item.title} - ${item.price}
            <button onClick={() => handleRemoveItem(item.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
      <button onClick={handleCompra}>Proceder a la Compra</button>
    </div>
  );
};

export default Carrito;
