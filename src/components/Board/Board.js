import React from "react";
import Tile from "../Tile";
import "./Board.css";

const Board = ({ numTiles, tiles }) => {
  const tileComponents = tiles.map((tile) => <Tile {...tile} />);

  const gridConfig = {
    gridTemplateColumns: `repeat(${Math.sqrt(numTiles)}, 1fr)`,
    gridTemplateRows: `repeat(${Math.sqrt(numTiles)}, 1fr)`,
  };

  return (
    <div className="Board" style={gridConfig}>
      {tileComponents}
    </div>
  );
};

export default Board;
