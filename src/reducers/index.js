const initialState = {
  userData: {},
  ifFetching: false,
  ifError: false
};

const asyncReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_USER":
      return Object.assign({}, state, {
        ifFetching: true,
        userData: {},
        ifError: false
      });
    case "FETCHED_USER":
      return Object.assign({}, state, {
        userData: action.data,
        ifFetching: false,
        ifError: false
      });
    case "RECEIVE_ERROR":
      return Object.assign({}, state, {
        ifFetching: false,
        userData: {},
        ifError: true
      });
    default:
      return state;
  }
};

export default asyncReducer;
