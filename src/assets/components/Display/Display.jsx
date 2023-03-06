import React from "react";
import "./Display.css";
const Display = ({ value }) => {
  return (
  <div className="outputContainer">
  <span className="display">{value}</span>
  </div>

  )
};

export default Display;
