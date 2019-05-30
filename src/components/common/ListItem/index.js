import React from "react";
// import PropTypes from "prop-types";
import styles from "./listItem.scss";

const ListItem = ({ data, position }) => (
  <div styleName="ListItem">
    <div styleName="ListItem__position">{position + 1}.</div>
    <div styleName="ListItem__detail">
      <h3 styleName="ListItem__detail__name">{data.name}</h3>
      <h5 styleName="ListItem__detail__artist">{data.artist}</h5>
    </div>
  </div>
);

ListItem.propTypes = {};

ListItem.defaultProps = {};

export default ListItem;
