import React from "react";
import CSSModules from "react-css-modules";
// import PropTypes from "prop-types";

import ListItem from "../common/ListItem";
import styles from "./result.scss";

const SearchResult = ({ result }) => {
  return (
    <div styleName="SearchResult">
      {result.map((item, index) => (
        <ListItem key={item.name} data={item} position={index} />
      ))}
    </div>
  );
};

SearchResult.propTypes = {};

SearchResult.defaultProps = {};

export default CSSModules(SearchResult, styles, { allowMultiple: true });
