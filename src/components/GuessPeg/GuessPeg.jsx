import React from "react";
import "./GuessPeg.css";

const GessPeg = props => (
  <div
    className="GuessPeg"
    style={{
      backgroundColor: props.color,
      border: props.color ? `1px solid ${props.color}` : "1px dashed grey",
      cursor: props.currentGuess && "pointer"
    }}
  />
);

export default GessPeg;
