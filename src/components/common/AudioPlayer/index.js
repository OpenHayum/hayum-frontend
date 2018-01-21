import React, { Component } from "react";
import CSSModules from "react-css-modules";
import classnames from "classnames";
import PropTypes from "prop-types";

import CoverArt from "../CoverArt";
import styles from "./audioPlayer.scss";

const controlNames = {
  IS_PLAYING: "isPlaying"
};

class AudioPlayer extends Component {
  static propTypes = {
    src: PropTypes.string
  };

  static defaultProps = {
    src: ""
  };

  constructor(props) {
    super(props);
    this.state = {
      isPlaying: false
    };
  }

  handleControlClick = ({ target }) => {
    console.log(target.name, this.state.isPlaying);
    this.setState({
      [target.name]: !this.state.isPlaying
    });
  };

  render() {
    const { isPlaying } = this.state;

    return (
      <div styleName="AudioPlayer">
        <div styleName="AudioPlayer__item">
          <CoverArt />
          <div styleName="AudioPlayer__item__details">
            <h4 styleName="AudioPlayer__item__details__name">Loktak Ema</h4>
            <h4 styleName="AudioPlayer__item__details__artist">Ranbir</h4>
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
              <button
                name={controlNames.IS_PLAYING}
                styleName={classnames(
                  "AudioPlayer__icon AudioPlayer__circle AudioPlayer__control",
                  {
                    "AudioPlayer__circle--active AudioPlayer__circle--pause": isPlaying
                  }
                )}
                onClick={this.handleControlClick}
              />
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
          <div>
            <div styleName="AudioPlayer__volume__icon">
              <i className="icon-volume-2" />
            </div>
            <div styleName="AudioPlayer__volume__controls">
              <div styleName="AudioPlayer__volume__controls__timeline" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CSSModules(AudioPlayer, styles, { allowMultiple: true });
