const Reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.payload,
      };
    case "SET_EVENTS":
      return {
        ...state,
        events: action.payload,
      };
    case "ADD_TO_CARRITO":
      return {
        ...state,
        carrito: [...state.carrito, action.payload], // Copio el estado actual y le sumo el payload
      };
    case "REMOVE_FROM_CARRITO":
      return {
        ...state,
        carrito: state.carrito.filter(item => item.id !== action.payload.id), // Al estado actual, le filtro el item con el id del payload
      };
    case "CLEAR_CARRITO":
      return {
        ...state,
        carrito: [],
      };
    default:
      return state; // Si no coincide con ningun caso, se devuelve el mismo estado sin cambios
  }
};

export default Reducer;
