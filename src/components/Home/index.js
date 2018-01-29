import React, { Component } from "react";
import CSSModules from "react-css-modules";
// import PropTypes from "prop-types";

import CoverArtItem from "../common/CoverArtItem";
import styles from "./home.scss";

class Home extends Component {
  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container-fluid row" styleName="Home">
        <div
          className="col-lg-2 col-md-3 col-sm-6 col-xs-4"
          styleName="Home__grid"
        >
          <CoverArtItem />
        </div>
        <div
          className="col-lg-2 col-md-3 col-sm-6 col-xs-4"
          styleName="Home__grid"
        >
          <CoverArtItem />
        </div>
        <div
          className="col-lg-2 col-md-3 col-sm-6 col-xs-4"
          styleName="Home__grid"
        >
          <CoverArtItem />
        </div>
        <div
          className="col-lg-2 col-md-3 col-sm-6 col-xs-4"
          styleName="Home__grid"
        >
          <CoverArtItem />
        </div>
        <div
          className="col-lg-2 col-md-3 col-sm-6 col-xs-4"
          styleName="Home__grid"
        >
          <CoverArtItem />
        </div>
        <div
          className="col-lg-2 col-md-3 col-sm-6 col-xs-4"
          styleName="Home__grid"
        >
          <CoverArtItem />
        </div>
        <div
          className="col-lg-2 col-md-3 col-sm-6 col-xs-4"
          styleName="Home__grid"
        >
          <CoverArtItem />
        </div>
        <div
          className="col-lg-2 col-md-3 col-sm-6 col-xs-4"
          styleName="Home__grid"
        >
          <CoverArtItem />
        </div>
        <div
          className="col-lg-2 col-md-3 col-sm-6 col-xs-4"
          styleName="Home__grid"
        >
          <CoverArtItem />
        </div>
        <div
          className="col-lg-2 col-md-3 col-sm-6 col-xs-4"
          styleName="Home__grid"
        >
          <CoverArtItem />
        </div>
        <div
          className="col-lg-2 col-md-3 col-sm-6 col-xs-4"
          styleName="Home__grid"
        >
          <CoverArtItem />
        </div>
        <div
          className="col-lg-2 col-md-3 col-sm-6 col-xs-4"
          styleName="Home__grid"
        >
          <CoverArtItem />
        </div>
        <div
          className="col-lg-2 col-md-3 col-sm-6 col-xs-4"
          styleName="Home__grid"
        >
          <CoverArtItem />
        </div>
        <div
          className="col-lg-2 col-md-3 col-sm-6 col-xs-4"
          styleName="Home__grid"
        >
          <CoverArtItem />
        </div>
        <div
          className="col-lg-2 col-md-3 col-sm-6 col-xs-4"
          styleName="Home__grid"
        >
          <CoverArtItem />
        </div>
        <div
          className="col-lg-2 col-md-3 col-sm-6 col-xs-4"
          styleName="Home__grid"
        >
          <CoverArtItem />
        </div>
        <div
          className="col-lg-2 col-md-3 col-sm-6 col-xs-4"
          styleName="Home__grid"
        >
          <CoverArtItem />
        </div>
        <div
          className="col-lg-2 col-md-3 col-sm-6 col-xs-4"
          styleName="Home__grid"
        >
          <CoverArtItem />
        </div>
        <div
          className="col-lg-2 col-md-3 col-sm-6 col-xs-4"
          styleName="Home__grid"
        >
          <CoverArtItem />
        </div>
        <div
          className="col-lg-2 col-md-3 col-sm-6 col-xs-4"
          styleName="Home__grid"
        >
          <CoverArtItem />
        </div>
        <div
          className="col-lg-2 col-md-3 col-sm-6 col-xs-4"
          styleName="Home__grid"
        >
          <CoverArtItem />
        </div>
        <div
          className="col-lg-2 col-md-3 col-sm-6 col-xs-4"
          styleName="Home__grid"
        >
          <CoverArtItem />
        </div>
        <div
          className="col-lg-2 col-md-3 col-sm-6 col-xs-4"
          styleName="Home__grid"
        >
          <CoverArtItem />
        </div>
        <div
          className="col-lg-2 col-md-3 col-sm-6 col-xs-4"
          styleName="Home__grid"
        >
          <CoverArtItem />
        </div>
      </div>
    );
  }
}

export default CSSModules(Home, styles, { allowMultiple: true });
