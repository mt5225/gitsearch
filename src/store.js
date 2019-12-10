import { createStore, applyMiddleware } from "redux";
import asyncReducer from "./reducers";
import thunk from "redux-thunk";

//using redux-thunk middleware
const store = createStore(asyncReducer, applyMiddleware(thunk));

//using redux-saga middleware

export default store;
