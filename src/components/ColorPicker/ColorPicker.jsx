import React from "react";
import "./ColorPicker.css";

const ColorPicker = props => (
  <div className="Component">
    Color seleccionado: {props.selColorIdx}
    {props.colors.map(color => (
      <button
        className="ColorPicker"
        key={color}
        style={{ backgroundColor: color, borderColor: color }}
      ></button>
    ))}
  </div>
);

export default ColorPicker;
