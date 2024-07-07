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
        carrito: [...state.carrito, action.payload],
      };
    case "REMOVE_FROM_CARRITO":
      return {
        ...state,
        carrito: state.carrito.filter(item => item.id !== action.payload.id),
      };
    case "CLEAR_CARRITO":
      return {
        ...state,
        carrito: [],
      };
    default:
      return state;
  }
};

export default Reducer;
