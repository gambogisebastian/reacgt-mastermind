import React from "react";
import GessPeg from "../GessPeg/GessPeg";
import GameScore from "../GameScore/GameScore";

const GessPegs = props => (
  <div className="component, Flex-ch">
    GESSpegs
    <GessPeg />
    <GessPeg />
    <GessPeg />
    <GessPeg />
    <GameScore />
  </div>
);

export default GessPegs;
