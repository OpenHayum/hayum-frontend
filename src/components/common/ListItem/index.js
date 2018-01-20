import React from "react";
import CSSModules from "react-css-modules";
import PropTypes from "prop-types";
import styles from "./listItem.scss";

const ListItem = data => (
  <div styleName="ListItem">
    <h3>Hello It's me</h3>
    <h5>Ranbir Thouna</h5>
  </div>
);

ListItem.propTypes = {};

ListItem.defaultProps = {};

export default CSSModules(ListItem, styles, { allowMultiple: true });
