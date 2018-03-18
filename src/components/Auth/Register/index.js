import React from "react";
import CSSModules from "react-css-modules";
import PropTypes from "prop-types";

import Input from "Common/Input";
import Button from "Common/Button";
import styles from "./register.scss";

const Register = ({ onChange }) => (
  <div className="container" styleName="Register">
    <div className="row" styleName="Register__input__group">
      <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12" styleName="Register__input">
        <Input
          label="USERNAME *"
          name="username"
          placeholder="Enter Username"
          onChange={onChange}
        />
      </div>
      <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12" styleName="Register__input">
        <Input
          label="FULL NAME *"
          name="fullname"
          placeholder="Enter Full Name"
          onChange={onChange}
        />
      </div>
    </div>
    <div styleName="Register__input">
      <Input
        label="EMAIL"
        name="email"
        placeholder="Enter Email"
        onChange={onChange}
      />
    </div>
    <div styleName="Register__input">
      <Input
        label="PHONE *"
        name="phone"
        placeholder="Enter Phone Number"
        onChange={onChange}
      />
    </div>
    <div className="row" styleName="Register__input__group">
      <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12" styleName="Register__input">
        <Input
          label="PASSWORD *"
          name="password"
          placeholder="Enter Password"
          onChange={onChange}
        />
      </div>
      <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12" styleName="Register__input">
        <Input
          label="CONFIRM PASSWORD *"
          name="confirmPassword"
          type="password"
          placeholder="Enter password"
          onChange={onChange}
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
      <Button text="REGISTER" />
    </div>
  </div>
);

Register.propTypes = {
  onChange: PropTypes.func
};

Register.defaultProps = {
  onChange: () => null
};

export default CSSModules(Register, styles, { allowMultiple: true });
