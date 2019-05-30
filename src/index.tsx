import * as React from "react";
import { render } from "react-dom";
import { Provider } from 'react-redux';
// import {Routes} from "./routes";
import store from "./store";
import "./static/css/bootstrap.min.css";
import "./index.css";
import "./index.scss";

render(
  <Provider store={store}>
    {/*<Routes />*/}
  </Provider>,
  document.getElementById("root")
);
