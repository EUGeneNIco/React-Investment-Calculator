import { useState } from "react";
import Header from "./components/Header";
import Result from "./components/Result";
import UserInput from "./components/UserInput";

function App() {
  const [userInputs, setUserInputs] = useState({
    initialInvestment: 15000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userInputs.duration > 0;

  function handleValueChange(inputName, newInputValue) {
    // console.log(`new value of ${inputName} is ${newInputValue}`);

    setUserInputs((prevInput) => {
      let newInputValues = { ...prevInput, [inputName]: +newInputValue };
      return newInputValues;
    });
  }

  return (
    <>
      <Header />
      <UserInput onChange={handleValueChange} input={userInputs} />
      {!inputIsValid && (
        <p className="center">Please enter a duration greater that zero.</p>
      )}
      {inputIsValid && <Result input={userInputs} />}
    </>
  );
}

export default App;
