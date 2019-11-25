import React, { Component } from "react";

function formatTime(seconds) {
  let mins = Math.floor(seconds / 60)
    .toString()
    .padStart(2, "0");
  let secs = Math.floor(seconds % 60)
    .toString()
    .padStart(2, "0");
  return `${mins}:${secs}`;
}

const relojStyle = {
  fontFamily: "Roboto, monospace",
  fontSize: 40,
  color: "#8E8",
  backgroundColor: "#EEF"
};

class GameTimer extends Component {
  handleTick = () => {
    this.props.handleTimerUpdate();
  };
  componentDidMount() {
    this.timerId = setInterval(this.handleTick, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    return <div style={relojStyle}>{formatTime(this.props.elapsedTime)}</div>;
  }
}

export default GameTimer;
