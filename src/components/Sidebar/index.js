import React, { Component } from 'react';
import cssModules from 'react-css-modules';
import PropTypes from 'prop-types';
import styles from './sidebar.scss';

class Sidebar extends Component {
  static propTypes = {
  };

  static defaultProps = {
  };

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div styleName="Sidebar">
        <h2>Sidebar</h2>
      </div>
    );
  }
}

export default cssModules(Sidebar, styles, { allowMultiple: true });
