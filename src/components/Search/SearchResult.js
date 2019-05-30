import React from "react";
// import PropTypes from "prop-types";

import ListItem from "../common/ListItem";
import  "./result.scss";

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

export default SearchResult;
