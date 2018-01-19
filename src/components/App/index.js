import React, { Component } from "react";
import cssModules from "react-css-modules";
import { AnimatedRoute } from "react-router-transition";
import { Route } from "react-router-dom";
import classNames from "classnames";

import Sidebar from "../Sidebar";
import Search from "../Search";
import { bounceTransition } from "../../utils/router.animated";
import styles from "./app.scss";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container-fluid" styleName="hayum">
        <div className="col-lg-2 col-md-3 col-sm-3" styleName="hayum__sidebar">
          <Sidebar />
        </div>
        <div className="col-lg-10 col-md-9 col-sm-9" styleName="hayum__main">
          <Route exact path="/search" component={Search} />
        </div>
        <div styleName="hayum__player" />
      </div>
    );
  }
}

export default cssModules(App, styles, { allowMultiple: true });
