import * as React from "react";
import { render } from "react-dom";
import { Provider } from 'react-redux';
import {BrowserRouter, Route} from "react-router-dom";
import {AnimatedSwitch} from "react-router-transition";
import {bounceTransition} from "Utils/router.animated";
import AppContainer from "./App/AppContainer";
import NotFound from "Common/NotFound";
import store from "./store";
import "./static/css/bootstrap.min.css";
import "./index.css";
import "./index.scss";


function Routes() {
  return (
      <BrowserRouter>
        <AnimatedSwitch
            atEnter={bounceTransition.atEnter}
            atLeave={bounceTransition.atLeave}
            atActive={bounceTransition.atActive}
            className="switch-wrapper"
        >
          <Route path="/" component={AppContainer} />
          <Route component={NotFound} />
        </AnimatedSwitch>
      </BrowserRouter>
  );
}

render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById("root")
);
