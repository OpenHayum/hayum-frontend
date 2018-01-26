import React from "react";
import CSSModules from "react-css-modules";
import PropTypes from "prop-types";
import styles from "./button.scss";

const Button = ({ text, ...restprops }) => (
  <button {...restprops} styleName="Button">
    {text}
  </button>
);

Button.propTypes = {
  text: PropTypes.string.isRequired
};

Button.defaultProps = {};

export default CSSModules(Button, styles, { allowMultiple: true });
