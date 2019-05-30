import React from "react";
// import PropTypes from "prop-types";
import styles from "./card.scss";

const Card = (props) => (
  <div styleName="Card">
    {props.children}
  </div>
);

Card.propTypes = {};

Card.defaultProps = {};

export default Card;
