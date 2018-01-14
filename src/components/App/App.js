import React, { Component } from 'react';
import cssModules from 'react-css-modules';
import styles from './app.scss';
import Sidebar from '../Sidebar';

class App extends Component {
  render() {
    return (
      <div className="container-fluid" styleName="hayum">
        <div className="col-lg-2" styleName="hayum__sidebar">
          <Sidebar />
        </div>
        <div className="col-lg-10" styleName="hayum__main">
          Hello
        </div>
      </div>
    );
  }
}

export default cssModules(App, styles);
