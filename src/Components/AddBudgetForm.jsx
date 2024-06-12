import React from "react";
import { Form } from "react-router-dom";
import { CurrencyRupeeIcon } from "@heroicons/react/24/solid";

const AddBudgetForm = () => {
  return (
    <div className="form-wrapper">
      <h2 className="h3">Create buget</h2>
      <Form method="post" className="grid-sm">
        <div className="grid-xs">
          <label htmlFor="New Budget">Budget Name</label>
          <input
            type="text"
            name="New Budget"
            id="newBudget"
            placeholder="e.g. Groceries"
            required
          />
          <label htmlFor="newBudgetAmount">Enter budget amount</label>
          <input
            type="number"
            step="0.01"
            name="newBudgetAmount"
            id="newBudgetAmount"
            placeholder="e.g. ₹300.00"
            required
            inputMode="decimal"
          />
        </div>
        <button type="submit" className="btn btn--dark">
          <span>Add budget</span>
          <CurrencyRupeeIcon  width={20} />
        </button>
      </Form>
    </div>
  );
};

export default AddBudgetForm;
