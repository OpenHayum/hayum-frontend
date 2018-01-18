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
        <li styleName="Menus__menu" className="hover-transition">
          <Link to="/music">
            <i className="icon-music-tone" />
            Music
          </Link>
        </li>
        <li styleName="Menus__menu" className="hover-transition">
          <Link to="/music/old">
            <i className="icon-music-tone" />
            Ariba Esei
          </Link>
        </li>
        <li styleName="Menus__menu" className="hover-transition">
          <Link to="/leela/sumang">
            <i className="icon-music-tone" />
            Sumang Leela
          </Link>
        </li>
        <li styleName="Menus__menu" className="hover-transition">
          <Link to="/leela/radio">
            <i className="icon-music-tone" />
            Radio Leela
          </Link>
        </li>
        <li styleName="Menus__menu" className="hover-transition">
          <Link to="/nokfade">
            <i className="icon-music-tone" />
            Nokfade
          </Link>
        </li>
      </ul>
    );
  }
}

export default CSSModules(Menus, styles, { allowMultiple: true });
