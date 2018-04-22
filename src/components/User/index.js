import React, { Component } from "react";
import CSSModules from "react-css-modules";
// import PropTypes from "prop-types";

import Header from "./Header";
import TrackUploader from './TrackUploader';
import Main from "./Main";
import Footer from "./Footer";
import Modal from 'Common/Modal';
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
            onOpenModal={this.handleOpenModal}
          />
        </header>
        <main>
          <Main />
        </main>
        <footer>
          <Footer />
        </footer>
        <Modal
          showModal={showModal}
          onCloseModal={this.handleCloseModal}
        >
          <TrackUploader />
        </Modal>
      </div>
    );
  }
}

export default CSSModules(User, styles, { allowMultiple: true });
