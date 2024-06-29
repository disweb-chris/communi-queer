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
    default:
      return state;
  }
};

export default Reducer;
