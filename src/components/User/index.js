import React, { Component } from "react";
import CSSModules from "react-css-modules";
// import PropTypes from "prop-types";

import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import styles from "./user.scss";

class User extends Component {
  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container-fluid" styleName="User">
        <header>
          <Header />
        </header>
        <main>
          <Main />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}

export default CSSModules(User, styles, { allowMultiple: true });
