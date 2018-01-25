import React, { Component } from "react";
import CSSModules from "react-css-modules";
import PropTypes from "prop-types";

import CoverArtItem from "../common/CoverArtItem";
import styles from "./music.scss";

class Music extends Component {
  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container-fluid row" styleName="Music">
        <div
          className="col-lg-2 col-md-3 col-sm-6 col-xs-4"
          styleName="Music__grid"
        >
          <CoverArtItem />
        </div>
        <div
          className="col-lg-2 col-md-3 col-sm-6 col-xs-4"
          styleName="Music__grid"
        >
          <CoverArtItem />
        </div>
        <div
          className="col-lg-2 col-md-3 col-sm-6 col-xs-4"
          styleName="Music__grid"
        >
          <CoverArtItem />
        </div>
        <div
          className="col-lg-2 col-md-3 col-sm-6 col-xs-4"
          styleName="Music__grid"
        >
          <CoverArtItem />
        </div>
        <div
          className="col-lg-2 col-md-3 col-sm-6 col-xs-4"
          styleName="Music__grid"
        >
          <CoverArtItem />
        </div>
        <div
          className="col-lg-2 col-md-3 col-sm-6 col-xs-4"
          styleName="Music__grid"
        >
          <CoverArtItem />
        </div>
        <div
          className="col-lg-2 col-md-3 col-sm-6 col-xs-4"
          styleName="Music__grid"
        >
          <CoverArtItem />
        </div>
        <div
          className="col-lg-2 col-md-3 col-sm-6 col-xs-4"
          styleName="Music__grid"
        >
          <CoverArtItem />
        </div>
        <div
          className="col-lg-2 col-md-3 col-sm-6 col-xs-4"
          styleName="Music__grid"
        >
          <CoverArtItem />
        </div>
        <div
          className="col-lg-2 col-md-3 col-sm-6 col-xs-4"
          styleName="Music__grid"
        >
          <CoverArtItem />
        </div>
        <div
          className="col-lg-2 col-md-3 col-sm-6 col-xs-4"
          styleName="Music__grid"
        >
          <CoverArtItem />
        </div>
        <div
          className="col-lg-2 col-md-3 col-sm-6 col-xs-4"
          styleName="Music__grid"
        >
          <CoverArtItem />
        </div>
        <div
          className="col-lg-2 col-md-3 col-sm-6 col-xs-4"
          styleName="Music__grid"
        >
          <CoverArtItem />
        </div>
        <div
          className="col-lg-2 col-md-3 col-sm-6 col-xs-4"
          styleName="Music__grid"
        >
          <CoverArtItem />
        </div>
        <div
          className="col-lg-2 col-md-3 col-sm-6 col-xs-4"
          styleName="Music__grid"
        >
          <CoverArtItem />
        </div>
        <div
          className="col-lg-2 col-md-3 col-sm-6 col-xs-4"
          styleName="Music__grid"
        >
          <CoverArtItem />
        </div>
        <div
          className="col-lg-2 col-md-3 col-sm-6 col-xs-4"
          styleName="Music__grid"
        >
          <CoverArtItem />
        </div>
        <div
          className="col-lg-2 col-md-3 col-sm-6 col-xs-4"
          styleName="Music__grid"
        >
          <CoverArtItem />
        </div>
        <div
          className="col-lg-2 col-md-3 col-sm-6 col-xs-4"
          styleName="Music__grid"
        >
          <CoverArtItem />
        </div>
        <div
          className="col-lg-2 col-md-3 col-sm-6 col-xs-4"
          styleName="Music__grid"
        >
          <CoverArtItem />
        </div>
        <div
          className="col-lg-2 col-md-3 col-sm-6 col-xs-4"
          styleName="Music__grid"
        >
          <CoverArtItem />
        </div>
        <div
          className="col-lg-2 col-md-3 col-sm-6 col-xs-4"
          styleName="Music__grid"
        >
          <CoverArtItem />
        </div>
        <div
          className="col-lg-2 col-md-3 col-sm-6 col-xs-4"
          styleName="Music__grid"
        >
          <CoverArtItem />
        </div>
        <div
          className="col-lg-2 col-md-3 col-sm-6 col-xs-4"
          styleName="Music__grid"
        >
          <CoverArtItem />
        </div>
      </div>
    );
  }
}

export default CSSModules(Music, styles, { allowMultiple: true });
