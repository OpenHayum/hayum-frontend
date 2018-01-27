import React, { Component } from "react";
import CSSModules from "react-css-modules";
import PropTypes from "prop-types";
import styles from "./user.scss";

class User extends Component {
  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <div />;
  }
}

export default CSSModules(User, styles, { allowMultiple: true });
