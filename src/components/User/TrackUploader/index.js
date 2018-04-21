import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';

import Input from 'Common/Input';
import Button from 'Common/Button';
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
    this.state = {};
  }

  render() {
    return (
      <div className="container" styleName="TrackUploader">
        <div className="row" styleName="TrackUploader__input__group">
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12" styleName="TrackUploader__input">
            <Input
              label="TITLE *"
              name={inputNames.userName}
              placeholder="Enter Title"
              onChange={this.handleChange}
            />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12" styleName="TrackUploader__input">
            <Input
              label="ARTIST *"
              name={inputNames.fullName}
              placeholder="Enter Artist"
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div styleName="TrackUploader__input">
          <Input
            label="EMAIL"
            name={inputNames.email}
            type="email"
            placeholder="Enter Email"
            onChange={this.handleChange}
          />
        </div>
        <div styleName="TrackUploader__input">
          <Input
            label="PHONE *"
            name={inputNames.phone}
            type="number"
            placeholder="Enter Phone Number"
            onChange={this.handleChange}
          />
        </div>
        <div styleName="TrackUploader__input">
          <Button text="Submit" onClick={this.handleSubmit} />
        </div>
      </div>
    );
  }
}

export default CSSModules(TrackUploader, styles, { allowMultiple: true });
