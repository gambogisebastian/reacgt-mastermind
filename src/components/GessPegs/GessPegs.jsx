import React from "react";
import GessPeg from "../GessPeg/GessPeg";
import './GessPegs.css'

const GessPegs = props => (
  <div className="GuessPegs">
    <GessPeg color={props.colors[props.code[0]]} />
    <GessPeg color={props.colors[props.code[1]]} />
    <GessPeg color={props.colors[props.code[2]]} />
    <GessPeg color={props.colors[props.code[3]]} />
  </div>
);

export default GessPegs;
