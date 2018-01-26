import React, { Component } from "react";
import cssModules from "react-css-modules";
import classNames from "classnames";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import NavMenu from "./Menus/NavMenu";
import Menus from "./Menus";
import getBGColor from "../../utils/backgroundColorGenerator";
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

  handleMenuClick = ({ target }) => {
    this.props.changeBackground({
      background: getBGColor()
    });
  };

  render() {
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
        <Menus onClick={this.handleMenuClick} />
        <div styleName="Sidebar__footer">
          <Link to="/auth">
            <i className="icon-user" />
            <span>RedJohn</span>
          </Link>
        </div>
      </div>
    );
  }
}

export default cssModules(Sidebar, styles, { allowMultiple: true });
