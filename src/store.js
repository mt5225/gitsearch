import { createStore, applyMiddleware } from "redux";
import asyncReducer from "./reducers";
import saga from "redux-saga";

const store = createStore(asyncReducer, applyMiddleware(saga));
export default store;
