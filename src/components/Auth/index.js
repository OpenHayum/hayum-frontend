import React, { Component } from "react";
import CSSModules from "react-css-modules";
// import PropTypes from "prop-types";
import classnames from "classnames";
import { Route, Switch, Link } from "react-router-dom";

import Login from "./Login";
import Register from "./Register";
import styles from "./auth.scss";

class Auth extends Component {
  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { match } = this.props;
    const { pathname } = window.location;

    return (
      <div styleName="Auth">
        <div styleName="Auth__tabs">
          <div styleName="Auth__tabs__nav">
            <div
              styleName={classnames("Auth__tabs__nav__header", {
                "Auth__tabs__nav__header--active":
                  pathname === `${match.url}/login`
              })}
            >
              <Link to={`${match.url}/login`}>SIGN IN</Link>
            </div>
            <div
              styleName={classnames("Auth__tabs__nav__header", {
                "Auth__tabs__nav__header--active":
                  pathname === `${match.url}/register`
              })}
            >
              <Link to={`${match.url}/register`}>REGISTER</Link>
            </div>
          </div>
          <div styleName="Auth__tabs__content">
            <Switch>
              <Route path={`${match.url}/login`} component={Login} />
              <Route path={`${match.url}/register`} component={Register} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default CSSModules(Auth, styles, { allowMultiple: true });
