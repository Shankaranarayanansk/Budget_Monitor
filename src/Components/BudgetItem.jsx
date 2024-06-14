import React from "react";
import { calculateExpense, expenseCalculation, getPercentage } from "../helper";

const BudgetItem = ({ budget }) => {
  const { id, name, amount, color } = budget;
  const spent = calculateExpense(id);

  return (
    <div className="budget" style={{ "--accent": color }}>
      <div className="progress-text">
        <h3>{name}</h3>
        <p>{expenseCalculation(amount)} is Budgeted</p>
      </div>
      <progress max={amount} value={spent}>
        {getPercentage(spent / amount)}
      </progress>
      <div className="progress-text">
        <small>{expenseCalculation(spent)} spent</small>
        <small>{expenseCalculation(amount - spent)} remaining</small>
      </div>
    </div>
  );
};

export default BudgetItem;
