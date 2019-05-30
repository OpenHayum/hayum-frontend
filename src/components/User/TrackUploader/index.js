import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Input from 'Common/Input';
import Button from 'Common/Button';
import FileUpload from './FileUpload';
import styles from './trackUploader.scss';

const apiUrl = "http://localhost:8080/api/v1/file/upload";

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

    this.audioRef = null;
    this.thumbnailRef = null;
  }

  render() {
    const { files } = this.state;

    return (
      <div className="container" styleName="TrackUploader">
        <FileUpload
          setRef={this.setAudioRef}
          label="UPLOAD AUDIO"
          files={files}
          apirUrl={apiUrl}
        />
        <FileUpload
          setRef={this.setThumbnailRef}
          label="UPLOAD AUDIO THUMBNAIL"
          files={files}
          apirUrl={apiUrl}
        />
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

  setAudioRef = (_ref) => {
    this.audioRef = _ref;
  }

  setThumbnailRef = (_ref) => {
    this.thumbnailRef = _ref;
  }
}

export default TrackUploader;
