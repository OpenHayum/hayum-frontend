import React from "react";
import CSSModules from "react-css-modules";
import PropTypes from "prop-types";
import styles from "./notFound.scss";

const NotFound = () => {
  return (
    <div styleName="NotFound">
      <h5>404 | Not Found</h5>
    </div>
  );
};

NotFound.propTypes = {};

NotFound.defaultProps = {};

export default CSSModules(NotFound, styles, { allowMultiple: true });
