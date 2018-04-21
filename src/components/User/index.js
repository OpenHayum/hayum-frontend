import React, { Component } from "react";
import CSSModules from "react-css-modules";
// import PropTypes from "prop-types";
import { FilePond, File } from 'react-filepond';
import 'filepond/dist/filepond.min.css';

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
      files: []
    };
  }

  handleOpenModal = () => {
    this.setState({ showModal: true });
  };

  handleCloseModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    const { showModal, files } = this.state;

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
          <FilePond allowMultiple={true} maxFiles={3} server="/api">
            {files.map(file => (
              <File key={file} source={file} />
            ))}
          </FilePond>
          <TrackUploader />
        </Modal>
      </div>
    );
  }
}

export default CSSModules(User, styles, { allowMultiple: true });
