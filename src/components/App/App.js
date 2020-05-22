import React, { Component } from "react";
import OptionsPanel from "../OptionsPanel";
import Board from "../Board";
import { createTiles, indexOfSelected } from "../../misc/utils";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numTiles: 36,
      playing: false,
      previousTileIndex: null,
      tiles: [],
      toBeCleared: null,
    };
  }

  handleTileClicked(id, color) {
    this.setState(function (state) {
      const { tiles, toBeCleared, previousTileIndex } = state;
      const selectedTileIndex = indexOfSelected(tiles, id, color);
      if (toBeCleared !== null) {
        toBeCleared[0].selected = false;
        toBeCleared[1].selected = false;
        toBeCleared = null;
      }
      tiles[selectedTileIndex].selected = true;
      if (previousTileIndex !== null) {
        const previousTile = tiles[previousTileIndex];
        const selectedTile = tiles[selectedTileIndex];
        if (
          previousTile.id !== selectedTile.id &&
          previousTile.color === color
        ) {
          selectedTile.matched = true;
          previousTile.matched = true;
          previousTileIndex = null;
        } else {
          toBeCleared = [(previousTileIndex = null), selectedTileIndex];
        }
      } else {
        previousTileIndex = selectedTileIndex;
      }
      return { tiles, toBeCleared, previousTileIndex };
    });
  }

  startGame(numTiles) {
    this.setState(function (state) {
      return {
        playing: true,
        previousTileIndex: null,
        toBeCleared: null,
        tiles: createTiles(state.numTiles, this.handleTileClicked),
      };
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">Turbo-Matcher</header>
        <OptionsPanel
          playing={this.state.playing}
          numTiles={this.state.numTiles}
          startGame={this.startGame}
        />
        <Board numTiles={this.state.numTiles} tiles={this.state.tiles} />}
      </div>
    );
  }
}

export default App;
