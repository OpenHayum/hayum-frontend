import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { AnimatedSwitch } from "react-router-transition";

import { bounceTransition } from "./utils/router.animated";
import AppContainer from "./App/AppContainer";
import NotFound from "./components/common/NotFound";

const Routes = () => (
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

export default Routes;
