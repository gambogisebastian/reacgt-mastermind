import React from "react";

const ColorPicker = props => (
  <div className="component">
    Color seleccionado: {props.selColorIdx}
    {props.colors.map(color => (
      <button key={color}>{color}</button>
    ))}
  </div>
);

export default ColorPicker;
