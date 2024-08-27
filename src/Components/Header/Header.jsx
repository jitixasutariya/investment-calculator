import React, { useState } from "react";
import Logo from "../../Assets/logo.png";
import "../../Styles/styles.css";
import UserInput from "../UserInput";
import Result from "../Result";

const Header = () => {
  const [userInput, setUserInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => ({
      ...prevUserInput,
      [inputIdentifier]: newValue,
    }));
  }

  return (
    <div className="investment-container">
      <img src={Logo} alt="Logo" className="logo" />
      <UserInput userInput={userInput} onChangeInput={handleChange} />
      <Result input={userInput} />
    </div>
  );
};

export default Header;
