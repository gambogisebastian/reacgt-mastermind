import React from "react";
import "./GuessScore.css";

const GuessScore = ({ score }) => {
  //convierte el objeto score en un arreglo de 4 caracteres
  let scores = (
    "P".repeat(score.perfect) +
    "A".repeat(score.almost) +
    "I".repeat(4 - score.perfect - score.almost)
  ).split("");

  const baseStyle = {
    with: 10,
    height: 10,
    margin: 1,
    border: "1px solid",
    borderRadius: "50%"
  };

  const pegStyle = {
    P: {
      borderColor: "black",
      backgroundColor: "black"
    },
    A: {
      borderColor: "black",
      backgroundColor: "white"
    },
    I: {
      borderColor: "white",
      backgroundColor: "lightgrey"
    }
  };

  return (
    <div className="GuessScore">
      {scores.map((score, idx) => (
        <div key={idx} style={baseStyle} />
      ))}
    </div>
  );
};

export default GuessScore;
