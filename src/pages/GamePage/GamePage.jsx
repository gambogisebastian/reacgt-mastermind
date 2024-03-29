import React from "react";
import { Link } from "react-router-dom";
import GameBoard from "../../components/GameBoard/GameBoard";
import ColorPicker from "../../components/ColorPicker/ColorPicker";
import GameTimer from "../../components/GameTimer/GameTimer";
import NewGameButton from "../../components/NewGameButton/NewGameButton";
import "./GamePage.css";

const GamePage = props => {
  return (
    <div className="GamePage">
      <div className="Flex-ch">
        <GameBoard
          colors={props.colors}
          guesses={props.guesses}
          handlePegClick={props.handlePegClick}
          handleScoreClick={props.handleScoreClick}
        />
        <div className="GamePage-menu">
          <ColorPicker
            colors={props.colors}
            selColorIdx={props.selColorIdx}
            handleColorSelection={props.handleColorSelection}
          />
          <GameTimer
            elapsedTime={props.elapsedTime}
            handleTimerUpdate={props.handleTimerUpdate}
          />
          <Link className="btn btn-default GamePage-Link-margin" to="/settings">
            Nivel de dificultad
          </Link>
          <NewGameButton />
        </div>
      </div>
      <footer className="GamePage-footer">
        {props.winTries
          ? `Usted ganó en ${props.winTries} intentos`
          : "¡Buena suerte!"}
      </footer>
    </div>
  );
};

export default GamePage;
