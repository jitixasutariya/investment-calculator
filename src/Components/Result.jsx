import React, { useState } from "react";

const Result = ({ input }) => {
  const [investmentHistory, setInvestmentHistory] = useState([]);

  const calculateInvestmentResult = () => {
    const { initialInvestment, annualInvestment, expectedReturn, duration } =
      input;

    let futureValue =
      initialInvestment * Math.pow(1 + expectedReturn / 100, duration);

    // Loop through each year to add annual investment
    for (let i = 1; i <= duration; i++) {
      futureValue +=
        annualInvestment * Math.pow(1 + expectedReturn / 100, duration - i);
    }

    // Save the result to the history
    const newResult = {
      ...input,
      finalValue: futureValue.toFixed(2),
    };
    setInvestmentHistory([...investmentHistory, newResult]);
  };

  return (
    <div>
      <button className="button" onClick={calculateInvestmentResult}>
        Calculate
      </button>
      <h3 style={{ padding: "2rem", fontWeight: "600" }}>Investment History</h3>
      <table>
        <thead>
          <tr>
            <th>Initial Investment</th>
            <th>Annual Investment</th>
            <th>Expected Return (%)</th>
            <th>Duration (years)</th>
            <th>Final Value</th>
          </tr>
        </thead>
        <tbody>
          {investmentHistory.map((entry, index) => (
            <tr key={index}>
              <td>{entry.initialInvestment}</td>
              <td>{entry.annualInvestment}</td>
              <td>{entry.expectedReturn}</td>
              <td>{entry.duration}</td>
              <td>{entry.finalValue}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Result;
