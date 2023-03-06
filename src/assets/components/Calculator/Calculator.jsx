import React, { useState } from "react";
import "./Calculator.css";
import Button from "../Button/Button";
import Display from "../Display/Display";
const Calculator = () => {
  const [displayValue, setDisplayValue] = useState("399,981");

  function handleButtonClick(value) {
    switch (value) {
      case "del":
        // Remove the last character from the displayValue
        setDisplayValue(displayValue.slice(0, -1));
        break;
      case "reset":
        // Reset the displayValue to "0"
        setDisplayValue("0");
        break;
      case "=":
        try {
          // Evaluate the expression and update the displayValue with the result
          const result = eval(displayValue);
          setDisplayValue(result.toLocaleString());
        } catch (error) {
          // If the expression is invalid, display an error message
          setDisplayValue("Error");
        }
        break;
      case "+":
      case "-":
      case "*":
      case "/":
      case ".":
        // insures user can't enter an invalid expression with multiple operators in a row
        setDisplayValue((prevValue) =>
          prevValue.endsWith("+") ||
          prevValue.endsWith("-") ||
          prevValue.endsWith("*") ||
          prevValue.endsWith("/") ||
          prevValue.endsWith(".")
            ? prevValue.slice(0, -1) + value
            : prevValue + value
        );
        break;
      default:
        // Append the user input to the displayValue
        setDisplayValue((prevValue) =>
          prevValue === "0" ? value : prevValue + value
        );
    }
  }

  return (
    <main>
      <Display value={displayValue} />

      <div className="buttonsContainer">
        <Button label="7" onClick={() => handleButtonClick("7")} />
        <Button label="8" onClick={() => handleButtonClick("8")} />
        <Button label="9" onClick={() => handleButtonClick("9")} />
        <Button
          className="delBtn"
          label="del"
          onClick={() => handleButtonClick("del")}
        />
        <Button label="4" onClick={() => handleButtonClick("4")} />
        <Button label="5" onClick={() => handleButtonClick("5")} />
        <Button label="6" onClick={() => handleButtonClick("6")} />
        <Button label="+" onClick={() => handleButtonClick("+")} />
        <Button label="1" onClick={() => handleButtonClick("1")} />
        <Button label="2" onClick={() => handleButtonClick("2")} />
        <Button label="3" onClick={() => handleButtonClick("3")} />
        <Button label="-" onClick={() => handleButtonClick("-")} />
        <Button label="." onClick={() => handleButtonClick(".")} />
        <Button label="0" onClick={() => handleButtonClick("0")} />
        <Button label="/" onClick={() => handleButtonClick("/")} />
        <Button
          className="multiplyBtn"
          label="x"
          onClick={() => handleButtonClick("*")}
        />
        <div className="bottomRow">
          <Button
            className="big"
            label="reset"
            onClick={() => handleButtonClick("reset")}
          />
          <Button
            className="big"
            label="="
            onClick={() => handleButtonClick("=")}
          />
        </div>
      </div>
    </main>
  );
};

export default Calculator;
