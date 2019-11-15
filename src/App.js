import React, { Component } from "react";
import "./App.css";
import GameBoard from "./components/GameBoard/GameBoard";
import ColorPicker from "./components/ColorPicker/ColorPicker";
import GameTimer from "./components/GameTimer/GameTimer";
import NewGameButton from "./components/NewGameButton/NewGameButton";

const colors = ["#7CCCE5", "#FDE47F", "#E04644", "#B576AD"];

class App extends Component {
  constructor() {
    super();
    this.state = {
      selColorIdx: Math.floor(Math.random() * colors.length),
      guesses: [this.getNewGess()],
      code: this.genCode()
    };
    //this.handleColorSelection = this.handleColorSelection.bind(this); //para corregir el llamado de this desde el color picker que se encabrona porque lo llama desde un objeto
  }
  getNewGess() {
    return {
      //code: [1, 2, 3, 0],
      code: [null, null, null, null],
      score: {
        perfect: 0,
        almost: 0
      }
    };
  }
  genCode() {
    return new Array(4)
      .fill()
      .map(() => Math.floor(Math.random() * colors.length));
  }
  getWinTries() {
    //si es ganador, devuelve el num guesses, de lo contrario, 0 (no ganador)
    let lastGuess = this.state.guesses.length - 1;
    return this.state.guesses[lastGuess].score.perfect === 4
      ? lastGuess + 1
      : 0;
  }

  // si el método se va a ejecutar desde un componente hijo, hay que hacer lo siguiente
  handleColorSelection = colorIdx => {
    //artilujio que transforma el metodo en una función flecha porque lo inicializa el constructor
    //alert(`indice de color seleccionado`);
    debugger;
    this.setState({ selColorIdx: colorIdx }); // el this keyword hace bardo porque se llama desde un objeto del comnponente hijo
  };

  render() {
    let winTries = this.getWinTries();
    return (
      <div className="App">
        <button
          onClick={() =>
            this.setState(state => {
              return {
                selColorIdx: ++state.selColorIdx % 4
              };
            })
          }
        >
          Color siguiente
        </button>
        Color selecionado: {colors[this.state.selColorIdx]}
        ____Código generado (dev-mode): {this.state.code}
        <header className="App-header">MENTE MAESTRA</header>
        <div className="Flex-ch">
          <GameBoard colors={colors} guesses={this.state.guesses} />
          <div>
            <ColorPicker
              colors={colors}
              selColorIdx={this.state.selColorIdx}
              handleColorSelection={this.handleColorSelection}
            />
            <GameTimer />
            <NewGameButton />
          </div>
        </div>
        <footer className="App-footer">
          {winTries ? `Usted ganó en ${winTries} intentos` : "¡Buena suerte!"}
        </footer>
      </div>
    );
  }
}

export default App;
