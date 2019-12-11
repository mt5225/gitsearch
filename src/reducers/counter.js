const initialState = {
  count: 0
};

const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case "COUNT_ADD":
      return {
        ...state,
        count: state.count + 1
      };
    case "COUNT_REMOVE":
      return {
        ...state,
        count: state.count - 1
      };
    case "COUNT_RESET":
      return { ...state, count: 0 };
    default:
      return state;
  }
};

export default countReducer;
