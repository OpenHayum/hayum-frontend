import React from "react";
import CSSModules from "react-css-modules";
import PropTypes from "prop-types";
import styles from "./main.scss";

const Main = () => {
  return <div>Header</div>;
};

Main.propTypes = {};

Main.defaultProps = {};

export default CSSModules(Main, styles, { allowMultiple: true });
