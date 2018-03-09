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
    this.state = {
      showModal: false,
    };
  }

  handleOpenModal = () => {
    this.setState({ showModal: true });
  };

  handleCloseModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    const { showModal } = this.state;

    return (
      <div className="container-fluid" styleName="User">
        <header>
          <Header
            showModal={showModal}
            onOpenModal={this.handleOpenModal}
            onCloseModal={this.handleCloseModal}
          />
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
