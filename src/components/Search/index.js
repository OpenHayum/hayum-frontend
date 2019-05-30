import React, { Component } from "react";
// import PropTypes from "prop-types";

import SearchResult from "./SearchResult";
import styles from "./search.scss";

import mockData from "../../mocks/searchMockData";

class Search extends Component {
  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      result: []
    };
  }

  handleEnterKeyDown = e => {
    if (e.keyCode !== 13) return;
    this.handleChange(e);
  };

  handleChange = ({ target }) => {
    const { value } = target;
    const valueRegex = new RegExp(`(${value.split(" ").join("|")})`, "i");
    const result = mockData.filter(
      item =>
        valueRegex.test(item.name) ||
        valueRegex.test(item.album) ||
        valueRegex.test(item.artist)
    );
    this.setState({ result });
  };

  render() {
    const { result } = this.state;
    return (
      <div styleName="Search">
        <div styleName="Search__bar">
          <h5>Search by Song Name, Artist, Album</h5>
          <input
            type="text"
            name="search"
            autoFocus
            placeholder="Start typing and press enter..."
            autoComplete="off"
            onKeyDown={this.handleEnterKeyDown}
            onChange={this.handleChange}
          />
        </div>
        <div styleName="Search__result">
          <SearchResult result={result} />
        </div>
      </div>
    );
  }
}

export default Search;
