import React from "react";
import GuessScore from "../GuessScore/GuessScore";
import GessPegs from "../GessPegs/GessPegs";
import ScoreButton from "../ScoreButton/ScoreButton";

const GessRow = props => (
  <div className="Flex-ch">
    <div style={{ color: props.currentGuess ? "black" : "lightgrey" }}>
      {props.rowIdx + 1}
    </div>
    <GessPegs colors={props.colors} code={props.guess.code} />
    {props.currentGuess ? (
      <ScoreButton />
    ) : (
      <GuessScore score={props.guess.score} />
    )}
  </div>
);

export default GessRow;
