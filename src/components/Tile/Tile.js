import React from "react";

import "./Tile.css";

const Tile = ({ props }) => {
  const dynamicColour =
    props.selected || props.matched ? { backgroundColor: props.color } : null;

  return (
    <div style={dynamicColour} className="Tile">
      {props.selected || props.matched ? <props.svg /> : null}
    </div>
  );
};

export default Tile;
