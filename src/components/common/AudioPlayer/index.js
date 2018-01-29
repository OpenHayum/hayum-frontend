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
    const DURATION = 180;
    this.state = {
      isPlaying: false,
      playheadPosition: 0,
      activeTimelineWidth: 0,
      currentDuration: "00:00",
      totalDuration: this.formatTime(DURATION)
    };

    this.timeline = null;
    this.playhead = null;
    this.mouseOnPlayhead = false;
    this.duration = DURATION;
  }

  componentDidMount() {
    window.addEventListener("mouseup", this.mouseUp, false);
  }

  clickPercent = event => {
    const { left, width } = this.getPosition(this.timeline);
    return (event.clientX - left) / width;
  };

  formatTime = seconds => {
    var minutes = Math.floor(seconds / 60);
    minutes = minutes >= 10 ? minutes : "0" + minutes;
    seconds = Math.floor(seconds % 60);
    seconds = seconds >= 10 ? seconds : "0" + seconds;
    return minutes + ":" + seconds;
  };

  handleControlClick = ({ target }) => {
    this.setState({
      [target.name]: !this.state.isPlaying
    });
  };

  handleTimelineClick = e => {
    // console.info(e);
    this.movePlayhead(e);
  };

  getPosition = el => {
    return el.getBoundingClientRect();
  };

  mouseDown = () => {
    this.mouseOnPlayhead = true;
    window.addEventListener("mousemove", this.movePlayhead, true);
  };

  mouseUp = event => {
    if (this.mouseOnPlayhead) {
      this.movePlayhead(event);
      window.removeEventListener("mousemove", this.movePlayhead, true);
    }
    this.mouseOnPlayhead = false;
  };

  movePlayhead = event => {
    const { left, width: timelineWidth } = this.getPosition(this.timeline);
    // const { duration } = this.state;
    var newMargLeft = event.clientX - left;
    let playheadPosition = newMargLeft;

    if (newMargLeft < 0) {
      playheadPosition = 0;
    }
    if (newMargLeft > timelineWidth) {
      playheadPosition = timelineWidth;
    }

    this.setState({
      playheadPosition,
      activeTimelineWidth: playheadPosition,
      currentDuration: this.formatTime(
        this.duration * (playheadPosition / timelineWidth)
      )
    });
  };

  setTimelineRef = _ref => {
    this.timeline = _ref;
    this.timeline.addEventListener("click", this.handleTimelineClick, false);
  };

  setPlayheadRef = _ref => {
    this.playhead = _ref;
    this.playhead.addEventListener("mousedown", this.mouseDown, false);
  };

  render() {
    const {
      isPlaying,
      playheadPosition,
      activeTimelineWidth,
      currentDuration,
      totalDuration
    } = this.state;

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
                    "AudioPlayer__circle--play": isPlaying,
                    "AudioPlayer__circle--pause": !isPlaying
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
                {currentDuration}
              </div>
              <div styleName="AudioPlayer__timeline" ref={this.setTimelineRef}>
                <div
                  styleName="AudioPlayer__timeline__current"
                  style={{ width: activeTimelineWidth }}
                />
                <div
                  styleName="AudioPlayer__playhead"
                  ref={this.setPlayheadRef}
                  style={{ left: playheadPosition }}
                />
              </div>
              <div styleName="AudioPlayer__playback-time AudioPlayer__playback-time__right AudioPlayer__control">
                {totalDuration}
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
