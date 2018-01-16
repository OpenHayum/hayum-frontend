import React from 'react';
import App from './components/App';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
