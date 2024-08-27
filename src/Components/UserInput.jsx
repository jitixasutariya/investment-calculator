import React from "react";
import "../Styles/styles.css";

const UserInput = ({ onChangeInput, userInput }) => {
  return (
    <section id="user-input">
      <h2 className="title">Investment Calculator</h2>
      <div className="input-group">
        <p>
          <label htmlFor="initial-investment">Initial Investment</label>
          <input
            type="number"
            id="initial-investment"
            value={userInput.initialInvestment}
            placeholder="Enter amount"
            onChange={(event) =>
              onChangeInput("initialInvestment", event.target.value)
            }
          />
        </p>
        <p>
          <label htmlFor="annual-investment">Annual Investment</label>
          <input
            type="number"
            id="annual-investment"
            value={userInput.annualInvestment}
            placeholder="Enter amount"
            onChange={(event) =>
              onChangeInput("annualInvestment", event.target.value)
            }
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">Expected Return (%)</label>
          <input
            type="number"
            id="expected-return"
            value={userInput.expectedReturn}
            placeholder="Enter percentage"
            onChange={(event) =>
              onChangeInput("expectedReturn", event.target.value)
            }
          />
        </p>
        <p>
          <label htmlFor="duration">Duration (years)</label>
          <input
            type="number"
            id="duration"
            value={userInput.duration} // Note: Changed 'Duration' to 'duration' to match the prop
            placeholder="Enter years"
            onChange={(event) => onChangeInput("duration", event.target.value)}
          />
        </p>
      </div>
    </section>
  );
};

export default UserInput;
