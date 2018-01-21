import React from "react";
import CSSModules from "react-css-modules";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import styles from "./navMenu.scss";

const NavMenu = ({ to, text, children, className, onClick }) => (
  <div styleName="NavMenu" className={className} onClick={onClick}>
    <Link to={to}>{text ? text : children}</Link>
  </div>
);

NavMenu.propTypes = {
  to: PropTypes.string,
  className: PropTypes.string,
  text: PropTypes.string,
  children: PropTypes.any,
  onClick: PropTypes.func
};

NavMenu.defaultProps = {
  to: "/",
  text: "",
  className: "",
  children: null,
  onClick: () => null
};

export default CSSModules(NavMenu, styles, { allowMultiple: true });
