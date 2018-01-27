import React, { Component } from "react";
import CSSModules from "react-css-modules";
import PropTypes from "prop-types";
import classnames from "classnames";

import styles from "./tabs.scss";

class Tabs extends Component {
  static propTypes = {
    titles: PropTypes.arrayOf(PropTypes.string),
    children: PropTypes.object.isRequired
  };

  static defaultProps = {
    titles: []
  };

  constructor(props) {
    super(props);
    const { titles } = props;
    this.state = {
      activeTabIndex: 0
    };
  }

  handleTabClick = ({ target }) => {
    this.setState({
      activeTabIndex: parseInt(target.getAttribute("data-index"))
    });
  };

  render() {
    const { titles, children } = this.props;
    const { activeTabIndex } = this.state;

    return (
      <div styleName="Tabs">
        <div styleName="Tabs__nav">
          {titles.map((title, index) => (
            <div
              key={title}
              data-index={index}
              styleName={classnames("Tabs__nav__title", {
                "Tabs__nav__title--active": activeTabIndex === index
              })}
              onClick={this.handleTabClick}
            >
              {title}
            </div>
          ))}
        </div>
        {children}
      </div>
    );
  }
}

export default CSSModules(Tabs, styles, { allowMultiple: true });
