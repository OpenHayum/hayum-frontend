import React, { Component } from "react";
import cssModules from "react-css-modules";
import classNames from "classnames";
import PropTypes from "prop-types";

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
    return (
      <div styleName="Sidebar">
        <div styleName="Sidebar__logo">
          <div />
        </div>
        <NavMenu to="/search">
          <span>Search</span>
          <span>
            <i className="icon-magnifier" />
          </span>
        </NavMenu>
        <Menus />
        <div styleName="Sidebar__footer">
          <i className="icon-user" />
          <span>RedJohn</span>
        </div>
      </div>
    );
  }
}

export default cssModules(Sidebar, styles, { allowMultiple: true });
