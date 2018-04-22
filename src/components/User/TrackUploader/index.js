import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';

import Input from 'Common/Input';
import Button from 'Common/Button';
import FileUpload from './FileUpload';
import styles from './trackUploader.scss';

const formConfig = {
  validation: {
    userName: 'userName',
    fullName: 'fullName',
    email: 'email',
    password: 'password',
    phone: 'phone',
    confirmPassword: 'confirmPassword',
  },
};

const inputNames = {
  ...formConfig.validation,
};

class TrackUploader extends Component {
  static propTypes = {
  };

  static defaultProps = {
  };

  constructor(props) {
    super(props);
    this.state = {
      files: [],
    };
  }

  render() {
    const { files } = this.state;

    return (
      <div className="container" styleName="TrackUploader">
        <FileUpload label="UPLOAD AUDIO" files={files} />
        <FileUpload label="UPLOAD AUDIO THUMBNAIL" files={files} />
        <div styleName="TrackUploader__input">
          <Input
            label="TITLE *"
            name={inputNames.userName}
            placeholder="Enter Title"
            onChange={this.handleChange}
          />
        </div>
        <div styleName="TrackUploader__input">
          <Input
            label="ARTIST *"
            name={inputNames.fullName}
            placeholder="Enter Artist"
            onChange={this.handleChange}
          />
        </div>
        <div styleName="TrackUploader__input TrackUploader__input__last">
          <Button text="Submit" onClick={this.handleSubmit} />
        </div>
      </div>
    );
  }
}

export default CSSModules(TrackUploader, styles, { allowMultiple: true });
