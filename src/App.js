import React, { Component } from 'react';
import './App.css';
import GameBoard from './components/GameBoard/GameBoard'
import ColorPicker from './components/ColorPicker/ColorPicker';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">Mente Maestra</header>
        <GameBoard />
        <ColorPicker />
      </div>

    );
  }
}

export default App;
