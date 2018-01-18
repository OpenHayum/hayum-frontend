import React, { Component } from "react";
import cssModules from "react-css-modules";
import classNames from "classnames";
import Sidebar from "../Sidebar";
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
        <div className="col-lg-10 col-md-9 col-sm-9" styleName="hayum__main" />
        <div styleName="hayum__player" />
      </div>
    );
  }
}

export default cssModules(App, styles, { allowMultiple: true });
