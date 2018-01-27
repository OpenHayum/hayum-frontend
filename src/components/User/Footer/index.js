import React from "react";
import CSSModules from "react-css-modules";
import PropTypes from "prop-types";
import styles from "./footer.scss";

const Footer = () => {
  return <div>Header</div>;
};

Footer.propTypes = {};

Footer.defaultProps = {};

export default CSSModules(Footer, styles, { allowMultiple: true });
