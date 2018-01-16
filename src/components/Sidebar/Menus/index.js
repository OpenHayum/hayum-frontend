import React, { Component } from "react";
import CSSModules from "react-css-modules";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./menus.scss";

class Menus extends Component {
  static propTypes = {
    menusData: PropTypes.arrayOf(
      PropTypes.shape({
        linkTo: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
      })
    )
  };

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { menusData } = this.props;

    return (
      <ul styleName="Menus">
        {menusData.map(data => (
          <li styleName="Menus__menu">
            <Link to={data.linkTo}>{data.text}</Link>
          </li>
        ))}
      </ul>
    );
  }
}

export default CSSModules(Menus, styles, { allowMultiple: true });
