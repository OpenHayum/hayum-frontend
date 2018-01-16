import React, { Component } from "react";
import cssModules from "react-css-modules";
import classNames from "classnames";
import Sidebar from "../Sidebar";
import { isMobileDevice } from "../../utils";
import styles from "./app.scss";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.isMobileDevice = isMobileDevice();
  }

  componentDidMount() {
    const { width } = this.hayum.getBoundingClientRect();
    console.log(width);
  }

  setRef = _ref => {
    this.hayum = _ref;
  };

  render() {
    return (
      <div ref={this.setRef} className="container-fluid" styleName="hayum">
        <div
          className="col-lg-2 col-md-3 col-sm-3"
          styleName={classNames("hayum__sidebar", {
            "hayum__sidebar--is-mobile": this.isMobileDevice
          })}
        >
          <Sidebar isMobileDevice={this.isMobileDevice} />
        </div>
        <div className="col-lg-10 col-md-9 col-sm-9" styleName="hayum__main" />
        <div styleName="hayum__player" />
      </div>
    );
  }
}

export default cssModules(App, styles, { allowMultiple: true });
