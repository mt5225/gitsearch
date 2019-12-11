import { createStore, applyMiddleware, combineReducers } from "redux";
import gitUserReducer from "./reducers/gituser";
import countReducer from "./reducers/counter";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";
import logger from "redux-logger";

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware, logger];

const reducers = combineReducers({
  git: gitUserReducer,
  counter: countReducer
});

const store = createStore(reducers, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);
export default store;
