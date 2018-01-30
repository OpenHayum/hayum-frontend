import React from "react";
import CSSModules from "react-css-modules";
// import PropTypes from "prop-types";

import pushparani from "Images/pushparani.jpg";
import styles from "./header.scss";
import Button from 'Common/Button';

const Header = () => {
  return (
    <div styleName="ProfileHeader">
      <section styleName="ProfileHeader__image">
        <img src={pushparani} alt="Artist" />
      </section>
      <section styleName="ProfileHeader__details">
        <h5 styleName="ProfileHeader__details__username">@pushparani</h5>
        <h5 styleName="ProfileHeader__details__fullname">Pushparani Huidrom</h5>
        {/* <h5 styleName="ProfileHeader__details__description">Singer</h5> */}
      </section>
      <section styleName="ProfileHeader__metas">
        <div styleName="ProfileHeader__metas__meta">
          <Button>
            <span><i className="icon-user-follow" /> </span> Follow
          </Button>
        </div>
        <div styleName="ProfileHeader__metas__meta">
          <div styleName="ProfileHeader__metas__meta__value">1000</div>
          <div styleName="ProfileHeader__metas__meta__label">Followers</div>
        </div>
        <div styleName="ProfileHeader__metas__meta">
          <div styleName="ProfileHeader__metas__meta__value">765</div>
          <div styleName="ProfileHeader__metas__meta__label">Following</div>
        </div>
      </section>
    </div>
  );
};

Header.propTypes = {};

Header.defaultProps = {};

export default CSSModules(Header, styles, { allowMultiple: true });
