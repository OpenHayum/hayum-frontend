import React, { Component } from "react";
import cssModules from "react-css-modules";
import classNames from "classnames";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import NavMenu from "./Menus/NavMenu";
import getBGColor from "Utils/backgroundColorGenerator";
import Menus from "./Menus";
import styles from "./sidebar.scss";

class Sidebar extends Component {
  static propTypes = {
    changeBackground: PropTypes.func.isRequired
  };

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  handleAuthClick = () => {
    this.props.changeBackground({
      bgImageClassName: "auth-bg-image",
      background: null
    });
  };

  handleMenuClick = () => {
    this.props.changeBackground({
      bgImageClassName: null,
      background: getBGColor()
    });
  };

  render() {
    const { pathname } = window.location;
    const { changeBackground } = this.props;

    return (
      <div styleName="Sidebar">
        <div styleName="Sidebar__logo">
          <div />
        </div>
        <NavMenu
          to="/search"
          className={styles.Sidebar__search}
          onClick={this.handleMenuClick}
        >
          <span>Search</span>
          <span>
            <i className="icon-magnifier" />
          </span>
        </NavMenu>
        <Menus changeBackground={changeBackground} />
        <div
          styleName={classNames("Sidebar__footer", {
            "Sidebar__footer--active":
              pathname === "/auth/login" || pathname === "/auth/register"
          })}
          onClick={this.handleAuthClick}
        >
          <Link to="/auth/login">
            {/* <i className="icon-user" /> */}
            Sign In or Register
          </Link>
        </div>
      </div>
    );
  }
}

export default cssModules(Sidebar, styles, { allowMultiple: true });
