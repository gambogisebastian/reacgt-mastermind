import React from "react";
import styles from "./ColorPicker.module.css";

const ColorPicker = props => (
  <div className={styles.coluna}>
    Color selecionado: {props.selColorIdx}
    {props.colors.map((color, idx) => (
      <button
        className={`${styles.button}`}
        key={color}
        style={{
          backgroundColor: props.selColorIdx === idx ? "white" : color,
          borderColor: color
        }}
        onClick={props.handleColorSelection}
      />
    ))}
  </div>
);

export default ColorPicker;
