import React, { Component } from "react";
import cssModules from "react-css-modules";
import { Switch } from "react-router-dom";
import { AnimatedRoute } from "react-router-transition";

import Sidebar from "../components/Sidebar";
import Search from "../components/Search";
import AudioPlayer from "Common/AudioPlayer";
import Home from "../components/Home";
import Music from "../components/Music";
import Auth from "../components/Auth";
import User from "../components/User";
import { bounceTransition } from "Utils/router.animated";
import { getIndexInRange } from "Utils";
import styles from "./app.scss";
import "./app.css";

const bgVariantRegex = /\w*bg-variant-\w*/i;

const NUM_BG_VARIANTS = Object.keys(styles).filter(styleName =>
  bgVariantRegex.test(styleName)
).length;

const bgVariantPrefix = "hayum__bg-variant";

const bgChangeRoute = {
  AUTH: "/auth",
  USER: "/user"
};

const bgChangeRules = {
  [bgChangeRoute.AUTH]: " auth-bg-image"
};

class App extends Component {
  static propTypes = {};

  constructor(props) {
    super(props);
    this.state = {};

    this.lastKnownPathname = props.match.url;
    this.defaultHayumClassname = null;
    this.hayum = null;
  }

  componentDidMount() {
    this.defaultHayumClassname = this.hayum.className;
    this.changeBackground();
  }

  componentWillReceiveProps(nextProps) {
    const { pathname } = window.location;
    if (pathname !== this.lastKnownPathname) {
      this.changeBackground(pathname);
      this.lastKnownPathname = pathname;
    }
  }

  changeBackground = () => {
    const { pathname } = window.location;
    this.hayum.style.background = null;

    if (pathname.indexOf(bgChangeRoute.AUTH) !== -1) {
      this.hayum.className =
        this.defaultHayumClassname + bgChangeRules[bgChangeRoute.AUTH];
    } else if (pathname.indexOf(bgChangeRoute.USER) !== -1) {
      this.hayum.className =
        this.defaultHayumClassname +
        ` ${styles[`${bgVariantPrefix}__user-profile`]}`;
    } else {
      const bgVariantIndex = getIndexInRange(NUM_BG_VARIANTS) + 1;
      this.hayum.className =
        this.defaultHayumClassname +
        ` ${styles[`${bgVariantPrefix}-${bgVariantIndex}`]}`;
    }
  };

  setHayumRef = _ref => {
    this.hayum = _ref;
  };

  render() {
    return (
      <div className="container-fluid" styleName="hayum" ref={this.setHayumRef}>
        <div className="row">
          <div
            className="col-lg-2 col-md-3 col-sm-3 hidden-xs"
            styleName="hayum__sidebar"
          >
            <Sidebar />
          </div>
          <div
            className="col-lg-10 col-md-9 col-sm-9 col-xs-12"
            styleName="hayum__main"
          >
            <Switch>
              <AnimatedRoute
                {...bounceTransition}
                path="/search"
                component={Search}
              />
              <AnimatedRoute
                {...bounceTransition}
                exact
                path="/"
                component={Home}
              />
              <AnimatedRoute
                {...bounceTransition}
                path="/music"
                component={Music}
              />
              <AnimatedRoute
                {...bounceTransition}
                path="/auth"
                component={Auth}
              />
              <AnimatedRoute
                {...bounceTransition}
                path="/user/:username"
                component={User}
              />
            </Switch>
          </div>
          <div styleName="hayum__player">
            <AudioPlayer />
          </div>
        </div>
      </div>
    );
  }
}

export default cssModules(App, styles, { allowMultiple: true });
