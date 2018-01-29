import React from "react";
import CSSModules from "react-css-modules";
// import PropTypes from "prop-types";

import Tabs from "Common/Tabs";
import Card from "../Card";
import styles from "./main.scss";

const userProfileTabTitles = {
  IN_REVIEW: "IN REVIEW",
  APPROVED: "APPROVED",
  REJECTED: "REJECTED"
};

const Main = () => {
  return (
    <div className="container-fluid" styleName="Main">
      <div className="row">
        <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12">
          <Tabs titles={Object.values(userProfileTabTitles)}>
            <div styleName="Main__items">
              <div styleName="Main__items__item">
                <Card />
              </div>
              <div styleName="Main__items__item">
                <Card />
              </div>
              <div styleName="Main__items__item">
                <Card />
              </div>
              <div styleName="Main__items__item">
                <Card />
              </div>
              <div styleName="Main__items__item">
                <Card />
              </div>
              <div styleName="Main__items__item">
                <Card />
              </div>
              <div styleName="Main__items__item">
                <Card />
              </div>
              <div styleName="Main__items__item">
                <Card />
              </div>
              <div styleName="Main__items__item">
                <Card />
              </div>
              <div styleName="Main__items__item">
                <Card />
              </div>
              <div styleName="Main__items__item">
                <Card />
              </div>
              <div styleName="Main__items__item">
                <Card />
              </div>
              <div styleName="Main__items__item">
                <Card />
              </div>
              <div styleName="Main__items__item">
                <Card />
              </div>
              <div styleName="Main__items__item">
                <Card />
              </div>
              <div styleName="Main__items__item">
                <Card />
              </div>
            </div>
          </Tabs>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
          <div styleName="Main__card">
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
};

Main.propTypes = {};

Main.defaultProps = {};

export default CSSModules(Main, styles, { allowMultiple: true });
