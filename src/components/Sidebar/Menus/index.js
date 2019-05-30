import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import PropTypes from "prop-types";

import NavMenu from "./NavMenu";
import  "./menus.scss";

class Menus extends Component {
  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <nav styleName="Menus">
        <NavMenu to="/" text="Home" />
        <NavMenu to="/music" text="Music" />
        <NavMenu to="/music/old" text="Ariba Esei" />
        <NavMenu to="/leela/sumang" text="Sumang Leela" />
        <NavMenu to="/leela/radio" text="Radio Leela" />
        <NavMenu to="/nokfade" text="Nokfade" />
        <NavMenu to="/user/pushparani" text="Profile" />
      </nav>
    );
  }
}

export default Menus;
