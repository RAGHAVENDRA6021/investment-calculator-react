import React, { useState } from "react";

const InvestmentInput = ({userInput,debounceUserInputHandler}) => {
  
  return (
    <div id="user-input">
      <div className="input-group">
        <div>
          <label>INITIAL INVESTMENT</label>
          <input type="number" value={userInput.initialInvestment} onChange={(e)=>debounceUserInputHandler(e.target.value,'initialInvestment')}/>
        </div>
        <div>
          <label>Annual INVESTMENT</label>
          <input type="number" value={userInput.annualInvestment} onChange={(e)=>debounceUserInputHandler(e.target.value,'annualInvestment')}/>
        </div>
      </div>
      <div className="input-group">
        <div>
          <label>Expected Return</label>
          <input type="number" value={userInput.expectedReturn} onChange={(e)=>debounceUserInputHandler(e.target.value,'expectedReturn')}/>
        </div>
        <div>
          <label>Duration</label>
          <input type="number" value={userInput.duration} onChange={(e)=>debounceUserInputHandler(e.target.value,'duration')}/>
        </div>
      </div>
    </div>
  );
};

export default InvestmentInput;
