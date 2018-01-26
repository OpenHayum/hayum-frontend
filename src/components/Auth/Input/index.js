import React from "react";
import CSSModules from "react-css-modules";
import PropTypes from "prop-types";
import styles from "./input.scss";

const Input = ({ label, ...restprops }) => (
  <div styleName="Input">
    <h5>{label}</h5>
    <input
      autocomplete="off"
      type="text"
      placeholder="Type here..."
      {...restprops}
    />
  </div>
);

Input.propTypes = {
  label: PropTypes.string.isRequired
};

Input.defaultProps = {};

export default CSSModules(Input, styles, { allowMultiple: true });
