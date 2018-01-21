import React, { Component } from "react";
import CSSModules from "react-css-modules";
import PropTypes from "prop-types";
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
        <div styleName="AudioPlayer__container">
          <div styleName="AudioPlayer__container__controls">
            <button styleName="AudioPlayer__icon AudioPlayer__control">
              <i className="icon-control-start" />
            </button>
            <button styleName="AudioPlayer__icon AudioPlayer__circle AudioPlayer__control">
              <i className="icon-control-play" />
            </button>
            <button styleName="AudioPlayer__icon AudioPlayer__control">
              <i className="icon-control-end" />
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
    );
  }
}

export default CSSModules(AudioPlayer, styles, { allowMultiple: true });
