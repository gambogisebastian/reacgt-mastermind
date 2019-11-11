import React from "react";
import GuessRow from "../GessRow/GuessRow";
import "./GameBoard.css";

const GameBoard = props => (
  <div className="GameBoard">
    {props.guesses.map((guess, idx) => (
      <GuessRow
        guess={guess}
        colors={props.colors}
        rowIdx={idx}
        currentGuess={idx === props.guesses.length - 1}
        key={idx}
      />
    ))}
  </div>
);

export default GameBoard;
