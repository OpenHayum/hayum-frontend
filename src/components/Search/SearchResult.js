import React from "react";
import CSSModules from "react-css-modules";
import PropTypes from "prop-types";

import ListItem from "../common/ListItem";
import styles from "./result.scss";

const SearchResult = ({ result }) => {
  return (
    <div>
      {result.map(item => <ListItem key={item.name}>{item.name}</ListItem>)}
    </div>
  );
};

SearchResult.propTypes = {};

SearchResult.defaultProps = {};

export default CSSModules(SearchResult, styles, { allowMultiple: true });
