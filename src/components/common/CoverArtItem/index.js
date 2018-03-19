import React from "react";
import CSSModules from "react-css-modules";
// import PropTypes from "prop-types";
import styles from "./coverArtItem.scss";

const CoverArtItem = () => {
  return (
    <div styleName="CoverArtItem" className="row">
      <div styleName="CoverArtItem__thumbnail" className="col-lg-12 col-md-12 col-sm-12 col-xs-4">
        <div styleName="CoverArtItem__thumbnail__overlay">
          <button>
            <i className="icon-control-play" />
          </button>
        </div>
      </div>
      <div styleName="CoverArtItem__detail" className="col-lg-12 col-md-12 col-sm-12 col-xs-8">
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
