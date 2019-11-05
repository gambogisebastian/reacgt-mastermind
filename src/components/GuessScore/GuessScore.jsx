import React from "react";

const GuessScore = ({ score }) => {
  //convierte el objeto score en un arreglo de 4 caracteres
  let scores = (
    "P".repeat(score.perfect) +
    "A".repeat(score.almost) +
    "I".repeat(4 - score.perfect - score.almost)
  ).split("");
  return (
    <div>
      {scores.map((score, idx) => (
        <div key={idx}>{score}</div>
      ))}
    </div>
  );
};

export default GuessScore;
