import { use } from "react";
import styles from "./App.module.css";
import ButtonsContainer from "./components/ButtonsContainer.jsx";
import Display from "./components/Display.jsx";
import { useState } from "react";

function App() {
  const [calVal, setCalValue] = useState("");

  const onButtonClick = (buttonText) => {
    if (buttonText === "C") {
      setCalValue("");
    } else if (buttonText === "=") {
      const result = eval(calVal); // Note: Using eval can be dangerous if not handled properly
      setCalValue(result.toString());
    } else {
      const newDisplayValue = calVal + buttonText;
      setCalValue(newDisplayValue);
    }
  };

  return (
    <div className={styles.calculator}>
      <Display displayVal={calVal}></Display>
      <ButtonsContainer onButtonClick={onButtonClick}></ButtonsContainer>
    </div>
  );
}

export default App;
