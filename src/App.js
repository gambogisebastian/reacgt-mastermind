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
      guesses: [this.getNewGess(), this.getNewGess()],
      code: this.genCode()
    };
  }
  getNewGess() {
    return {
      code: [2, 3, 0, 1], //code: [null, null, null, null],
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
  render() {
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
            <ColorPicker colors={colors} selColorIdx={this.state.selColorIdx} />
            <GameTimer />
            <NewGameButton />
          </div>
        </div>
        <footer className="App-footer">footer</footer>
      </div>
    );
  }
}

export default App;
