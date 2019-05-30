import React from "react";
import PropTypes from "prop-types";

import Input from "Common/Input";
import Button from "Common/Button";
import  "./login.scss";

const Login = ({ onChange }) => (
  <div styleName="Login">
    <div styleName="Login__input">
      <Input
        label="USERNAME"
        name="username"
        placeholder="Enter Username or Email or Phone"
        onChange={onChange}
      />
    </div>
    <div styleName="Login__input">
      <Input
        label="PASSWORD"
        name="password"
        type="password"
        placeholder="Enter password"
        onChange={onChange}
      />
    </div>
    <div styleName="Login__input">
      <Button text="SIGN IN" />
    </div>
  </div>
);

Login.propTypes = {
  onChange: PropTypes.func
};

Login.defaultProps = {
  onChange: () => null
};

export default Login;

