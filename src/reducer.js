import { combineReducers } from "redux";

import app from "./App/appReducer";
import auth from './components/Auth/authReducer';

export default combineReducers({
  app,
  auth
});
