import React from "react";
import CSSModules from "react-css-modules";
import PropTypes from "prop-types";

import Card from "../Card";
import styles from "./main.scss";

const Main = () => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  return <div className="container-fluid" styleName="Main" />;
};

Main.propTypes = {};

Main.defaultProps = {};

export default CSSModules(Main, styles, { allowMultiple: true });
