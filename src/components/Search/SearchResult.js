import React from "react";
import CSSModules from "react-css-modules";
import PropTypes from "prop-types";
import styles from "./result.scss";

const SearchResult = ({ result }) => {
  return <div>{result.map(item => <h5 key={item.name}>{item.name}</h5>)}</div>;
};

SearchResult.propTypes = {};

SearchResult.defaultProps = {};

export default CSSModules(SearchResult, styles, { allowMultiple: true });
