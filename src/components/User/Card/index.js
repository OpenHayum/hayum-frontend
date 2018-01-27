import React from "react";
import CSSModules from "react-css-modules";
import PropTypes from "prop-types";
import styles from "./card.scss";

const Card = () => {
  return (
    <div styleName="Card">
      <header>Header</header>
      <main>Header</main>
      <footer>Footer</footer>
    </div>
  );
};

Card.propTypes = {};

Card.defaultProps = {};

export default CSSModules(Card, styles, { allowMultiple: true });
