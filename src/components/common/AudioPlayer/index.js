import React, { Component } from "react";
import CSSModules from "react-css-modules";
import PropTypes from "prop-types";

import CoverArt from "../CoverArt";
import styles from "./audioPlayer.scss";

class AudioPlayer extends Component {
  static propTypes = {
    src: PropTypes.string
  };

  static defaultProps = {
    src: ""
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div styleName="AudioPlayer">
        <div styleName="AudioPlayer__item">
          <CoverArt />
          <div styleName="AudioPlayer__item__details">
            <h4>Loktak Ema</h4>
            <h4>Ranbir</h4>
          </div>
        </div>
        <div styleName="AudioPlayer__container">
          <div styleName="AudioPlayer__container__wrapper">
            <div styleName="AudioPlayer__container__controls">
              <button styleName="AudioPlayer__icon AudioPlayer__control AudioPlayer__right-spacing">
                <i className="icon-shuffle" />
              </button>
              <button styleName="AudioPlayer__icon AudioPlayer__control AudioPlayer__right-spacing">
                <i className="icon-control-start" />
              </button>
              <button styleName="AudioPlayer__icon AudioPlayer__circle AudioPlayer__control">
                <i className="icon-control-play" />
              </button>
              <button styleName="AudioPlayer__icon AudioPlayer__control AudioPlayer__left-spacing">
                <i className="icon-control-end" />
              </button>
              <button styleName="AudioPlayer__icon AudioPlayer__control AudioPlayer__left-spacing">
                <i className="icon-loop" />
              </button>
            </div>
            <div styleName="AudioPlayer__timeline-container">
              <div styleName="AudioPlayer__playback-time AudioPlayer__playback-time__left AudioPlayer__control">
                00:14
              </div>
              <div styleName="AudioPlayer__timeline">
                <div styleName="AudioPlayer__playhead" />
              </div>
              <div styleName="AudioPlayer__playback-time AudioPlayer__playback-time__right AudioPlayer__control">
                03:13
              </div>
            </div>
            <audio src={this.props.src} preload="true" />
          </div>
        </div>
        <div styleName="AudioPlayer__volume">
          <div styleName="AudioPlayer__volume__icon">
            <i className="icon-volume-2" />
          </div>
          <div styleName="AudioPlayer__volume__controls">
            <div styleName="AudioPlayer__volume__controls__timeline" />
          </div>
        </div>
      </div>
    );
  }
}

export default CSSModules(AudioPlayer, styles, { allowMultiple: true });
