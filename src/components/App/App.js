import React, { Component } from "react";
import cssModules from "react-css-modules";
import classNames from "classnames";
import styles from "./app.scss";
import Sidebar from "../Sidebar";
import { isMobileDevice } from '../../utils';

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
          className="col-lg-2"
          styleName={classNames("hayum__sidebar", {
            "hayum__sidebar--is-mobile": this.isMobileDevice
          })}
        >
          <Sidebar isMobileDevice={this.isMobileDevice} />
        </div>
        <div className="col-lg-10" styleName="hayum__main">
          Hello
        </div>
      </div>
    );
  }
}

export default cssModules(App, styles, { allowMultiple: true });
