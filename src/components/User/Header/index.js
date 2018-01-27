import React from "react";
import CSSModules from "react-css-modules";
import PropTypes from "prop-types";

import coverart from "Images/coverart.jpeg";
import styles from "./header.scss";

const Header = () => {
  return (
    <div styleName="ProfileHeader">
      <div styleName="ProfileHeader__image">
        <img src={coverart} />
      </div>
      <div styleName="ProfileHeader__details">
        <h5 styleName="ProfileHeader__details__username">@dragfire</h5>
        <h5 styleName="ProfileHeader__details__fullname">Devajit Asem</h5>
      </div>
    </div>
  );
};

Header.propTypes = {};

Header.defaultProps = {};

export default CSSModules(Header, styles, { allowMultiple: true });
