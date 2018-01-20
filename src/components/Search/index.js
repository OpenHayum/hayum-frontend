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
        <div styleName="Search__bar">
          <h5>Search by Song Name, Artist, Album</h5>
          <input
            type="text"
            name="search"
            autoFocus
            placeholder="Start typing and press enter..."
          />
        </div>
      </div>
    );
  }
}

export default CSSModules(Search, styles, { allowMultiple: true });
