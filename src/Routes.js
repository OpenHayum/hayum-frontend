import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { AnimatedSwitch } from "react-router-transition";

import App from "./components/App";
import NotFound from "./components/common/NotFound";

const Routes = () => (
  <BrowserRouter>
    <AnimatedSwitch
      atEnter={{ opacity: 0 }}
      atLeave={{ opacity: 0 }}
      atActive={{ opacity: 1 }}
      className="switch-wrapper"
    >
      <Route exact path="/" component={App} />
      <Route component={NotFound} />
    </AnimatedSwitch>
  </BrowserRouter>
);

export default Routes;
