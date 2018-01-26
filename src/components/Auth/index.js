import React, { Component } from "react";
import CSSModules from "react-css-modules";
import PropTypes from "prop-types";
import classnames from "classnames";

import Login from "./Login";
import styles from "./auth.scss";

const SIGN_IN = "SIGN IN";
const REGISTER = "REGISTER";

const authTabNames = {
  SIGN_IN,
  REGISTER
};

class Auth extends Component {
  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      activeTabName: authTabNames.SIGN_IN
    };
  }

  handleTabClick = ({ target }) => {
    this.setState({ activeTabName: target.getAttribute("data-tab-name") });
  };

  render() {
    const { activeTabName } = this.state;

    return (
      <div styleName="Auth">
        <div styleName="Auth__tabs">
          <div styleName="Auth__tabs__nav">
            <div
              data-tab-name={authTabNames.SIGN_IN}
              styleName={classnames("Auth__tabs__nav__header", {
                "Auth__tabs__nav__header--active":
                  activeTabName === authTabNames.SIGN_IN
              })}
              onClick={this.handleTabClick}
            >
              SIGN IN
            </div>
            <div
              data-tab-name={authTabNames.REGISTER}
              styleName={classnames("Auth__tabs__nav__header", {
                "Auth__tabs__nav__header--active":
                  activeTabName === authTabNames.REGISTER
              })}
              onClick={this.handleTabClick}
            >
              REGISTER
            </div>
          </div>
          <div styleName="Auth__tabs__content">
            <Login />
          </div>
        </div>
      </div>
    );
  }
}

export default CSSModules(Auth, styles, { allowMultiple: true });
