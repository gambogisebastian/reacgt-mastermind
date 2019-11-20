import React from "react";
import GameBoard from "../../components/GameBoard/GameBoard";
import ColorPicker from "../../components/ColorPicker/ColorPicker";
import GameTimer from "../../components/GameTimer/GameTimer";
import NewGameButton from "../../components/NewGameButton/NewGameButton";

const GamePage = props => {
  return (
    <div className="App">
      <div className="Flex-ch">
        <GameBoard
          colors={props.colors}
          guesses={props.guesses}
          handlePegClick={props.handlePegClick}
          handleScoreClick={props.handleScoreClick}
        />
        <div>
          <ColorPicker
            colors={props.colors}
            selColorIdx={props.selColorIdx}
            handleColorSelection={props.handleColorSelection}
          />
          <GameTimer />
          <NewGameButton />
        </div>
      </div>
      <footer className="App-footer">
        {props.winTries
          ? `Usted ganó en ${props.winTries} intentos`
          : "¡Buena suerte!"}
      </footer>
    </div>
  );
};

export default GamePage;
