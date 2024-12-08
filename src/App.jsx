import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import InvestmentInput from "./components/InvestmentInput";
import { debounce } from "./util/utils";
import { calculateInvestmentResults } from "./util/investment";
import InvestmentTable from "./components/InvestmentTable";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: "",
    annualInvestment: "",
    expectedReturn: "",
    duration: "",
  });
  const [userOutput, setUserOutput] = useState([]);
  const [debounceInput, setDebounceInput] = useState(userInput);

  useEffect(() => {
    const { initialInvestment, annualInvestment, expectedReturn, duration } =
      userInput;
    if (
      !initialInvestment ||
      !annualInvestment ||
      !expectedReturn ||
      !duration
    ) {
      setUserOutput((prev) => []);
      return;
    } else {
      setUserOutput((prev) => {
        return calculateInvestmentResults(userInput);
      });
    }
  }, [debounceInput]);

  useEffect(() => {
    let timer = setTimeout(() => setDebounceInput(userInput), 1000);
    return () => clearTimeout(timer);
  }, [userInput]);

  const userInputHandler = (value, key) => {
    setUserInput((currentInput) => {
      const currentInputCopy = { ...currentInput };
      return { ...currentInputCopy, [key]: Number(value) };
    });
  };

  return (
    <div>
      <Header />
      <InvestmentInput
        debounceUserInputHandler={userInputHandler}
        userInput={userInput}
      />
      <InvestmentTable userTable={userOutput} />
    </div>
  );
}

export default App;
