import React from "react";
import CSSModules from "react-css-modules";
// import PropTypes from "prop-types";
import styles from "./card.scss";

const Card = (props) => (
  <div styleName="Card">
    {props.children}
  </div>
);

Card.propTypes = {};

Card.defaultProps = {};

export default CSSModules(Card, styles, { allowMultiple: true });
