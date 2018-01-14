import React, { Component } from 'react';
import cssModules from 'react-css-modules';
import styles from './app.scss';
import logo from '../../logo.svg';

class App extends Component {
  render() {
    console.log(styles);
    return (
      <div className="App" styleName="app-wrapper">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default cssModules(App, styles);
