import React from "react";
import CSSModules from "react-css-modules";
// import PropTypes from "prop-types";

import Tabs from "Common/Tabs";
import Card from "../Card";
import styles from "./main.scss";
import absLampImage from 'Images/abs-lamp.jpeg';

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
          <div styleName="Main__tabs">
            <Tabs titles={Object.values(userProfileTabTitles)}>
              <div styleName="Main__items">
                <div styleName="Main__items__item">
                  <Card>
                    <div styleName="Main__items__item__image">
                      <img src={absLampImage}/>
                    </div>
                    <div styleName="Main__items__item__details">
                      <div styleName="Main__items__item__details__item-name">Nangi Maithong Urubada</div>
                      {/*<div styleName="Main__items__item__details__artist">Ranbir Thouna</div>*/}
                      <div styleName="Main__items__item__details__album">Album: Korou</div>
                      <div styleName="Main__items__item__details__uploaded-date">Uploaded On: 8:30 PM 12th, January 2017</div>
                    </div>
                  </Card>
                </div>
                <div styleName="Main__items__item">
                  <Card>
                    <div styleName="Main__items__item__image">
                      <img src={absLampImage}/>
                    </div>
                    <div styleName="Main__items__item__details">
                      <div styleName="Main__items__item__details__item-name">Nangi Maithong Urubada</div>
                      {/*<div styleName="Main__items__item__details__artist">Ranbir Thouna</div>*/}
                      <div styleName="Main__items__item__details__album">Album: Korou</div>
                      <div styleName="Main__items__item__details__uploaded-date">Uploaded On: 8:30 PM 12th, January 2017</div>
                    </div>
                  </Card>
                </div>
                <div styleName="Main__items__item">
                  <Card>
                    <div styleName="Main__items__item__image">
                      <img src={absLampImage}/>
                    </div>
                    <div styleName="Main__items__item__details">
                      <div styleName="Main__items__item__details__item-name">Nangi Maithong Urubada</div>
                      {/*<div styleName="Main__items__item__details__artist">Ranbir Thouna</div>*/}
                      <div styleName="Main__items__item__details__album">Album: Korou</div>
                      <div styleName="Main__items__item__details__uploaded-date">Uploaded On: 8:30 PM 12th, January 2017</div>
                    </div>
                  </Card>
                </div>
                <div styleName="Main__items__item">
                  <Card>
                    <div styleName="Main__items__item__image">
                      <img src={absLampImage}/>
                    </div>
                    <div styleName="Main__items__item__details">
                      <div styleName="Main__items__item__details__item-name">Nangi Maithong Urubada</div>
                      {/*<div styleName="Main__items__item__details__artist">Ranbir Thouna</div>*/}
                      <div styleName="Main__items__item__details__album">Album: Korou</div>
                      <div styleName="Main__items__item__details__uploaded-date">Uploaded On: 8:30 PM 12th, January 2017</div>
                    </div>
                  </Card>
                </div>
                <div styleName="Main__items__item">
                  <Card>
                    <div styleName="Main__items__item__image">
                      <img src={absLampImage}/>
                    </div>
                    <div styleName="Main__items__item__details">
                      <div styleName="Main__items__item__details__item-name">Nangi Maithong Urubada</div>
                      {/*<div styleName="Main__items__item__details__artist">Ranbir Thouna</div>*/}
                      <div styleName="Main__items__item__details__album">Album: Korou</div>
                      <div styleName="Main__items__item__details__uploaded-date">Uploaded On: 8:30 PM 12th, January 2017</div>
                    </div>
                  </Card>
                </div>
                <div styleName="Main__items__item">
                  <Card>
                    <div styleName="Main__items__item__image">
                      <img src={absLampImage}/>
                    </div>
                    <div styleName="Main__items__item__details">
                      <div styleName="Main__items__item__details__item-name">Nangi Maithong Urubada</div>
                      {/*<div styleName="Main__items__item__details__artist">Ranbir Thouna</div>*/}
                      <div styleName="Main__items__item__details__album">Album: Korou</div>
                      <div styleName="Main__items__item__details__uploaded-date">Uploaded On: 8:30 PM 12th, January 2017</div>
                    </div>
                  </Card>
                </div>
                <div styleName="Main__items__item">
                  <Card>
                    <div styleName="Main__items__item__image">
                      <img src={absLampImage}/>
                    </div>
                    <div styleName="Main__items__item__details">
                      <div styleName="Main__items__item__details__item-name">Nangi Maithong Urubada</div>
                      {/*<div styleName="Main__items__item__details__artist">Ranbir Thouna</div>*/}
                      <div styleName="Main__items__item__details__album">Album: Korou</div>
                      <div styleName="Main__items__item__details__uploaded-date">Uploaded On: 8:30 PM 12th, January 2017</div>
                    </div>
                  </Card>
                </div>
                <div styleName="Main__items__item">
                  <Card>
                    <div styleName="Main__items__item__image">
                      <img src={absLampImage}/>
                    </div>
                    <div styleName="Main__items__item__details">
                      <div styleName="Main__items__item__details__item-name">Nangi Maithong Urubada</div>
                      {/*<div styleName="Main__items__item__details__artist">Ranbir Thouna</div>*/}
                      <div styleName="Main__items__item__details__album">Album: Korou</div>
                      <div styleName="Main__items__item__details__uploaded-date">Uploaded On: 8:30 PM 12th, January 2017</div>
                    </div>
                  </Card>
                </div>
              </div>
            </Tabs>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
          <div styleName="Main__right-sidebar">
            <div styleName="Main__right-sidebar__card">
              <Card>
                <div styleName="Main__right-sidebar__card__header">
                  No. of uploads
                </div>
                <div styleName="Main__right-sidebar__card__main">
                  1000
                </div>
              </Card>
            </div>
            <div styleName="Main__right-sidebar__card">
              <Card>
                <div styleName="Main__right-sidebar__card__header">
                  Approved uploads
                </div>
                <div styleName="Main__right-sidebar__card__main">
                  800
                </div>
              </Card>
            </div>
            <div styleName="Main__right-sidebar__card">
              <Card>
                <div styleName="Main__right-sidebar__card__header">
                  In-Review uploads
                </div>
                <div styleName="Main__right-sidebar__card__main">
                  171
                </div>
              </Card>
            </div>
            <div styleName="Main__right-sidebar__card">
              <Card>
                <div styleName="Main__right-sidebar__card__header">
                  Rejected uploads
                </div>
                <div styleName="Main__right-sidebar__card__main">
                  29
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Main.propTypes = {};

Main.defaultProps = {};

export default CSSModules(Main, styles, {allowMultiple: true});
