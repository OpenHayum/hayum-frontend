import React from "react";
import PropTypes from "prop-types";
import cx from 'classnames';

import styles from "./button.scss";

const Button = ({text, isActive, children, ...restProps}) => (
  <button
    {...restProps}
    styleName={cx("Button", {
      "Button--active": isActive,
    })}
  >
    {text}
    {children}
  </button>
);

Button.propTypes = {
  isActive: PropTypes.bool,
  text: PropTypes.string,
};

Button.defaultProps = {
  isActive: false,
  text: '',
};

export default Button;
