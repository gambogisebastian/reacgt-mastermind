import React, { Component } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import GamePage from "../GamePage/GamePage";
import SettingsPage from "../SettingsPage/SetingsPage";

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
    //debugger;
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
        <header className="App-header">M E N T E &nbsp;&nbsp;&nbsp; M A E S T R A</header>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <GamePage
                winTries={winTries}
                colors={colors}
                selColorIdx={this.state.selColorIdx}
                guesses={this.state.guesses}
                handleColorSelection={this.handleColorSelection}
                handleNewGameClick={this.handleNewGameClick}
                handlePegClick={this.handlePegClick}
                handleScoreClick={this.handleScoreClick}
              />
            )}
          />
          <Route exact path="/Settings" render={(props) => (
            <SettingsPage {...props}/>
          )}/>
        </Switch>
      </div>
    );
  }
}

export default App;
