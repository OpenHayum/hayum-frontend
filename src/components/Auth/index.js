import React, { Component } from "react";
import CSSModules from "react-css-modules";
import PropTypes from "prop-types";

import Login from "./Login";
import styles from "./auth.scss";

class Auth extends Component {
  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div styleName="Auth">
        <Login />
      </div>
    );
  }
}

export default CSSModules(Auth, styles, { allowMultiple: true });
