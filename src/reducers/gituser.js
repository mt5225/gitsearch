const initialState = {
  userData: {},
  ifFetching: false,
  ifError: false
};

const gitUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_USER":
      return { ...state, ifFetching: true, userData: {}, ifError: false };
    case "FETCHED_USER":
      return {
        ...state,
        userData: action.data,
        ifFetching: false,
        ifError: false
      };
    case "RECEIVE_ERROR":
      return { ...state, ifFetching: false, userData: {}, ifError: true };
    default:
      return state;
  }
};

export default gitUserReducer;
