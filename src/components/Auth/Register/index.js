import React, { Component } from "react";
import PropTypes from "prop-types";

import Input from "Common/Input";
import Button from "Common/Button";
import styles from "./register.scss";

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

class Register extends Component {
  constructor(props) {
    super(props);
    this.body = this.composeDefaultState();
  }

  composeDefaultState = () => {
    const state = {};
    Object.keys(inputNames).forEach((key) => {
      state[key] = null;
    });
    return state;
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.body[name] = value;
  }

  handleSubmit = () => {
    this.props.signUpUser(this.body);
  }

  isFormValid = () => {
    // Get the required keys for validation
    // from `formConfig.validation`
    Object.keys(formConfig.validation).forEach((key) => {

    });
  }

  render() {
    return (
      <div className="container" styleName="Register">
        <div className="row" styleName="Register__input__group">
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12" styleName="Register__input">
            <Input
              label="USERNAME *"
              name={inputNames.userName}
              placeholder="Enter Username"
              onChange={this.handleChange}
            />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12" styleName="Register__input">
            <Input
              label="FULL NAME *"
              name={inputNames.fullName}
              placeholder="Enter Full Name"
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div styleName="Register__input">
          <Input
            label="EMAIL"
            name={inputNames.email}
            type="email"
            placeholder="Enter Email"
            onChange={this.handleChange}
          />
        </div>
        <div styleName="Register__input">
          <Input
            label="PHONE *"
            name={inputNames.phone}
            type="number"
            placeholder="Enter Phone Number"
            onChange={this.handleChange}
          />
        </div>
        <div className="row" styleName="Register__input__group">
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12" styleName="Register__input">
            <Input
              label="PASSWORD *"
              name={inputNames.password}
              type="password"
              placeholder="Enter Password"
              onChange={this.handleChange}
            />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12" styleName="Register__input">
            <Input
              label="CONFIRM PASSWORD *"
              name={inputNames.confirmPassword}
              type="password"
              placeholder="Enter password"
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div styleName="Register__input">
          <label htmlFor="isArtist">
            <input type="checkbox" id="isArtist" />
            I am an Artist
          </label>
        </div>
        <div styleName="Register__input">
          <Button text="REGISTER" onClick={this.handleSubmit} />
        </div>
      </div>
    );
  }
}

Register.propTypes = {
  signUpUser: PropTypes.func.isRequired
};

export default Register;
