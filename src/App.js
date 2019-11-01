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
      selColorIdx: 2
    };
  }
  render() {
    return (
      <div className="App">
        Color selecionado: {colors[this.state.selColorIdx]}
        <header className="App-header">Mente Maestra</header>
        <GameBoard />
        <ColorPicker />
        <GameTimer />
        <NewGameButton />
        <footer className="App-footer">footer</footer>
      </div>
    );
  }
}

export default App;
