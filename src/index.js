import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "./static/css/bootstrap.min.css";
import "./index.css";
import App from "./components/App";
import Routes from './Routes';
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
  <Routes />,
  document.getElementById("root")
);
registerServiceWorker();
