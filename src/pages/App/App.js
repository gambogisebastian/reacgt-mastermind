import React, { Component } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import GamePage from "../GamePage/GamePage";
import SettingsPage from "../SettingsPage/SettingsPage";

const colors = {
  Fácil: ["#8EE", "#EE8", "#E88", "#E8E"],
  Intermedio: ["#8EE", "#EE8", "#E88", "#E8E", "#8E8"],
  Difícil: ["#8EE", "#EE8", "#E88", "#E8E", "#8E8", "#88E"],
  //colores: ["#7CCCE5", "#FDE47F", "#E04644", "#B576AD", "#B7D968", "#555E7B"],
  mADnesS: ["#88E", "#E88", "#8E8", "#EE8", "#8EE", "#E8E", "#EEE", "#888"],
  FONDOS: ["#EFE", "#EEF", "#FEE", "#FEF", "#FFE", "#EFF"]
};

class App extends Component {
  constructor() {
    console.log("App: el componente se construyó");
    super();
    this.state = { ...this.getInitialState(), difficulty: "Fácil" };
    //this.handleColorSelection = this.handleColorSelection.bind(this); //para corregir el llamado de this desde el color picker que se encabrona porque lo llama desde un objeto
  }

  getInitialState() {
    return {
      selColorIdx: 0,
      guesses: [this.getNewGuess()],
      code: this.genCode(),
      elapsedTime: 0
    };
  }

  getNewGuess() {
    return {
      code: [null, null, null, null],
      score: {
        perfect: 0,
        almost: 0
      }
    };
  }

  genCode() {
    let numColors = this.state && colors[this.state.difficulty].length;
    numColors = numColors || 4;
    return new Array(4)
      .fill()
      .map(dummy => Math.floor(Math.random() * numColors));
  }

  getWinTries() {
    //si es ganador, devuelve el num guesses, de lo contrario, 0 (no ganador)
    let lastGuess = this.state.guesses.length - 1;
    return this.state.guesses[lastGuess].score.perfect === 4
      ? lastGuess + 1
      : 0;
  }

  handleTimerUpdate = () => {
    this.setState(state => ({
      elapsedTime: ++state.elapsedTime
    }));
  };

  handleDifficultyChange = level => {
    // Use callback to ensure level is updated BEFORE calling handleNewGameClick
    this.setState({ difficulty: level }, () => this.handleNewGameClick());
  };

  // si el método se va a ejecutar desde un componente hijo, hay que hacer lo siguiente
  handleColorSelection = colorIdx => {
    //artilujio que transforma el metodo en una función flecha porque lo inicializa el constructor
    //alert(`indice de color seleccionado`);
    //debugger;
    this.setState({ selColorIdx: colorIdx }); // el this keyword hace bardo porque se llama desde un objeto del comnponente hijo
  };

  handleNewGameClick = () => {
    this.setState(this.getInitialState());
  };

  handlePegClick = pegIdx => {
    // Get index of last guess object
    let currentGuessIdx = this.state.guesses.length - 1;

    // Always replace objects/arrays with NEW ones
    let guessesCopy = [...this.state.guesses];
    let guessCopy = { ...guessesCopy[currentGuessIdx] };
    let codeCopy = [...guessCopy.code];

    // Update the NEW code array with the currently selected color
    codeCopy[pegIdx] = this.state.selColorIdx;

    // Update the NEW guess object
    guessCopy.code = codeCopy;

    // Update the NEW guesses array
    guessesCopy[currentGuessIdx] = guessCopy;

    // Update state with the NEW guesses array
    this.setState({
      guesses: guessesCopy
    });
  };

  handleScoreClick = () => {
    // Need the index of the current guess object (last object in guesses array)
    let currentGuessIdx = this.state.guesses.length - 1;

    // Create "working" copies of the "guessed" code and the secret
    // code so that we can modify them as we compute the number of
    // perfect and almost without messing up the actual ones in state
    let guessCodeCopy = [...this.state.guesses[currentGuessIdx].code];
    let secretCodeCopy = [...this.state.code];

    let perfect = 0,
      almost = 0;

    // First pass computes number of "perfect"
    guessCodeCopy.forEach((code, idx) => {
      if (secretCodeCopy[idx] === code) {
        perfect++;
        // Ensure same choice is not matched again
        // by updating both elements in the "working"
        // arrays to null
        guessCodeCopy[idx] = secretCodeCopy[idx] = null;
      }
    });

    // Second pass computes number of "almost"
    guessCodeCopy.forEach((code, idx) => {
      if (code === null) return;
      let foundIdx = secretCodeCopy.indexOf(code);
      if (foundIdx > -1) {
        almost++;
        // Again, ensure same choice is not matched again
        secretCodeCopy[foundIdx] = null;
      }
    });

    // State must only be updated with NEW objects/arrays
    // Always replace objects/arrays with NEW ones
    let guessesCopy = [...this.state.guesses];
    let guessCopy = { ...guessesCopy[currentGuessIdx] };
    let scoreCopy = { ...guessCopy.score };

    // Set scores
    scoreCopy.perfect = perfect;
    scoreCopy.almost = almost;

    // Update the NEW guess with the NEW score object
    guessCopy.score = scoreCopy;

    // Update the NEW guesses with the NEW guess object
    guessesCopy[currentGuessIdx] = guessCopy;

    // Add a new guess if not a winner
    if (perfect !== 4) guessesCopy.push(this.getNewGuess());

    // Finally, update the state with the NEW guesses array
    this.setState({
      guesses: guessesCopy
    });
  };

  /*--Métodos de ciclo de vida de los componentes--*/
  componentDidMount() {
    console.log("App: el componente se montó");
  }
  componentDidUpdate() {
    console.log("App: el componente se actualizó");
  }

  render() {
    console.log("App: el componente se renderizó");
    let winTries = this.getWinTries();
    return (
      <div>
        ____Código generado (dev-mode): {this.state.code}
        <header className="App-header">
          M E N T E &nbsp;&nbsp;&nbsp; M A E S T R A
        </header>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <GamePage
                winTries={winTries}
                colors={colors[this.state.difficulty]}
                selColorIdx={this.state.selColorIdx}
                guesses={this.state.guesses}
                elapsedTime={this.state.elapsedTime}
                handleColorSelection={this.handleColorSelection}
                handleNewGameClick={this.handleNewGameClick}
                handlePegClick={this.handlePegClick}
                handleScoreClick={this.handleScoreClick}
                handleTimerUpdate={this.handleTimerUpdate}
              />
            )}
          />
          <Route
            exact
            path="/Settings"
            render={props => (
              <SettingsPage
                {...props}
                colorsLookup={colors}
                difficulty={this.state.difficulty}
                handleDifficultyChange={this.handleDifficultyChange}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
