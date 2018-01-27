import React, { Component } from "react";
import CSSModules from "react-css-modules";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import NavMenu from "./NavMenu";
import styles from "./menus.scss";

class Menus extends Component {
  static propTypes = {
    menusData: PropTypes.arrayOf(
      PropTypes.shape({
        linkTo: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
      })
    ),
    onClick: PropTypes.func
  };

  static defaultProps = {
    onClick: () => null
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { menusData, onClick } = this.props;

    return (
      <nav styleName="Menus" onClick={onClick}>
        <NavMenu to="/" text="Home" />
        <NavMenu to="/music" text="Music" />
        <NavMenu to="/music/old" text="Ariba Esei" />
        <NavMenu to="/leela/sumang" text="Sumang Leela" />
        <NavMenu to="/leela/radio" text="Radio Leela" />
        <NavMenu to="/nokfade" text="Nokfade" />
        <NavMenu to="/user/dragfire" text="Profile" />
      </nav>
    );
  }
}

export default CSSModules(Menus, styles, { allowMultiple: true });
