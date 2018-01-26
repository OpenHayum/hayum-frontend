import React, { Component } from "react";
import cssModules from "react-css-modules";
import PropTypes from "prop-types";
import { Route } from "react-router-dom";
import { AnimatedSwitch } from "react-router-transition";
import classNames from "classnames";

import Sidebar from "../Sidebar";
import Search from "../Search";
import AudioPlayer from "../common/AudioPlayer";
import Home from "../Home";
import Music from "../Music";
import Auth from "../Auth";
import { bounceTransition } from "../../utils/router.animated";
import styles from "./app.scss";

class App extends Component {
  static propTypes = {
    changeBackground: PropTypes.func.isRequired,
    background: PropTypes.string.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { changeBackground, background } = this.props;
    return (
      <div className="container-fluid" styleName="hayum" style={{ background }}>
        <div className="col-lg-2 col-md-3 col-sm-3" styleName="hayum__sidebar">
          <Sidebar changeBackground={changeBackground} />
        </div>
        <div className="col-lg-10 col-md-9 col-sm-9" styleName="hayum__main">
          <AnimatedSwitch {...bounceTransition}>
            <Route exact path="/search" component={Search} />
            <Route exact path="/" component={Home} />
            <Route exact path="/music" component={Music} />
            <Route exact path="/auth" component={Auth} />
          </AnimatedSwitch>
        </div>
        <div styleName="hayum__player">
          <AudioPlayer />
        </div>
      </div>
    );
  }
}

export default cssModules(App, styles, { allowMultiple: true });
