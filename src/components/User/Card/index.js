import React from "react";
import CSSModules from "react-css-modules";
// import PropTypes from "prop-types";
import styles from "./card.scss";

const Card = () => {
  return (
    <div styleName="Card">
      <header>Number Of Listeners</header>
      <main>10</main>
      <footer>Approved: 3</footer>
    </div>
  );
};

Card.propTypes = {};

Card.defaultProps = {};

export default CSSModules(Card, styles, { allowMultiple: true });
