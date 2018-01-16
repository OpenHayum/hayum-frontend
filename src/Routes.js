import React from "react";
import App from "./components/App";
import NotFound from "./components/common/NotFound";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
