import React, { Component } from "react";
import CSSModules from "react-css-modules";
import PropTypes from "prop-types";
import styles from "./search.scss";

class Search extends Component {
  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div styleName="Search">
        <h5>Search by Artist, Album, </h5>
      </div>
    );
  }
}

export default CSSModules(Search, styles, { allowMultiple: true });
