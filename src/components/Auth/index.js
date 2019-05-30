import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { Route, Switch, Link } from "react-router-dom";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Login from "./Login";
import Register from "./Register";
import { signUpUser } from './authActions';
import styles from "./auth.scss";

const Auth = ({
  match,
  location,
  signUpUser,
}) => {
  const { pathname } = location;

  return (
    <div styleName="Auth">
      <div styleName="Auth__tabs">
        <div styleName="Auth__tabs__nav">
          <div
            styleName={classnames("Auth__tabs__nav__header", {
              "Auth__tabs__nav__header--active":
                pathname === `${match.url}/login`
            })}
          >
            <Link to={`${match.url}/login`}>SIGN IN</Link>
          </div>
          <div
            styleName={classnames("Auth__tabs__nav__header", {
              "Auth__tabs__nav__header--active":
                pathname === `${match.url}/register`
            })}
          >
            <Link to={`${match.url}/register`}>REGISTER</Link>
          </div>
        </div>
        <div styleName="Auth__tabs__content">
          <Switch>
            <Route path={`${match.url}/login`} component={Login} />
            <Route path={`${match.url}/register`} render={(props) => <Register {...props} signUpUser={signUpUser} />} />
          </Switch>
        </div>
      </div>
    </div>
  );
}

Auth.propTypes = {
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  signUpUser: PropTypes.func.isRequired,
};

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => bindActionCreators({
  signUpUser,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
