import React, { Component } from "react";
import classNames from "classnames";
// import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import NavMenu from "./Menus/NavMenu";
import Menus from "./Menus";
import styles from "./sidebar.scss";

class Sidebar extends Component {
  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { pathname } = window.location;

    return (
      <div styleName="Sidebar">
        <div styleName="Sidebar__logo">
          <div />
        </div>
        <NavMenu to="/search" className={styles.Sidebar__search}>
          <span>Search</span>
          <span>
            <i className="icon-magnifier" />
          </span>
        </NavMenu>
        <Menus />
        <div
          styleName={classNames("Sidebar__footer", {
            "Sidebar__footer--active":
              pathname === "/auth/login" || pathname === "/auth/register"
          })}
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

export default Sidebar;
