import React from "react";
import CSSModules from "react-css-modules";
// import PropTypes from "prop-types";
import styles from "./coverArtItem.scss";

const CoverArtItem = () => {
  return (
    <div styleName="CoverArtItem">
      <div styleName="CoverArtItem__thumbnail">
        <div styleName="CoverArtItem__thumbnail__overlay">
          <button>
            <i className="icon-control-play" />
          </button>
        </div>
      </div>
      <div styleName="CoverArtItem__detail">
        <a styleName="CoverArtItem__detail__name one-line-truncate">
          Nangi Thamoi Masak Khangna Nungsirure
        </a>
        <a styleName="CoverArtItem__detail__artist one-line-truncate">
          Pushparani Huidrom
        </a>
      </div>
    </div>
  );
};

CoverArtItem.propTypes = {};

CoverArtItem.defaultProps = {};

export default CSSModules(CoverArtItem, styles, { allowMultiple: true });
