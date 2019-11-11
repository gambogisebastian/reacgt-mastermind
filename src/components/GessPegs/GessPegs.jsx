import React from "react";
import GuessPeg from "../GuessPeg/GuessPeg";
import "./GessPegs.css";

const GessPegs = props => (
  <div className="GuessPegs">
    <GuessPeg color={props.colors[props.code[0]]} />
    <GuessPeg color={props.colors[props.code[1]]} />
    <GuessPeg color={props.colors[props.code[2]]} />
    <GuessPeg color={props.colors[props.code[3]]} />
  </div>
);

export default GessPegs;
