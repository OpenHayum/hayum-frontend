import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import store from "./store";
import "./static/css/bootstrap.min.css";
import "./index.css";
import "./index.scss";
import Routes from "./Routes";

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById("root")
);
