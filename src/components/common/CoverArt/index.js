import React from "react";
import CSSModules from "react-css-modules";
import PropTypes from "prop-types";
import styles from "./coverArt.scss";

const CoverArt = () => (
  <div styleName="CoverArt">
    <i className="icon-music-tone-alt" />
  </div>
);

CoverArt.propTypes = {};

CoverArt.defaultProps = {};

export default CSSModules(CoverArt, styles, { allowMultiple: true });
