import { useState } from "react";
import "./App.css";
import Calculator from "./assets/components/Calculator/Calculator";
import "./assets/components/Switch/Switch.css";
import "./assets/components/Switch/Themes.css";
function App() {
  const [colorScheme, setColorScheme] = useState("default");

  const handleColorSchemeChange = (event) => {
    setColorScheme(event.target.value);
  };

  return (
    <div className={`App ${colorScheme}`}>
      <header>
        <h1>calc</h1>
        <div className="themeContainer">
          <span className="themeTxt">theme</span>
          <div className="theme-input">
            <div className="label-box">
              <label>1</label>
              <label>2</label>
              <label>3</label>
            </div>
            <div className="radio-box">
              <input
                type="radio"
                name="colorScheme"
                id="radio-theme1"
                value="default"
                checked={colorScheme === "default"}
                onChange={handleColorSchemeChange}
              />
              <input
                type="radio"
                name="colorScheme"
                id="radio-theme2"
                value="light"
                checked={colorScheme === "light"}
                onChange={handleColorSchemeChange}
              />
              <input
                type="radio"
                name="colorScheme"
                id="radio-theme3"
                value="dark"
                checked={colorScheme === "dark"}
                onChange={handleColorSchemeChange}
              />
            </div>
          </div>
        </div>
      </header>
      <Calculator />
    </div>
  );
}

export default App;
