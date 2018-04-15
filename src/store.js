import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import promiseMiddleware from 'redux-promise-middleware';

import mainReducer from "./reducer";
import globalErrorMiddleware from './middlewares/errorMiddleware'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  mainReducer,
  composeEnhancers(applyMiddleware(
    thunkMiddleware,
    globalErrorMiddleware,
    promiseMiddleware(),
  ))
);

export default store;