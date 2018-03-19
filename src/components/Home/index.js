import React, { Component } from "react";
import CSSModules from "react-css-modules";
// import PropTypes from "prop-types";

import styles from "./home.scss";
import Music from "../Music";

class Home extends Component {
  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Music />
    );
  }
}

export default CSSModules(Home, styles, { allowMultiple: true });
