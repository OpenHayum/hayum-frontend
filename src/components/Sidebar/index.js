import React, { Component } from 'react';
import cssModules from 'react-css-modules';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import styles from './sidebar.scss';

class Sidebar extends Component {
  static propTypes = {
    isMobileDevice: PropTypes.bool.isRequired,
  };

  static defaultProps = {
  };

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { isMobileDevice } = this.props;
    return (
      <div styleName={classNames("Sidebar", {
        "Sidebar--is-mobile": isMobileDevice,
      })}>
        <h2>Sidebar</h2>
      </div>
    );
  }
}

export default cssModules(Sidebar, styles, { allowMultiple: true });
