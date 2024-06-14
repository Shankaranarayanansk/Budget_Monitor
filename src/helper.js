//waiting ku 
export const waait = () =>
   new Promise(res => setTimeout(res, Math.random() * 2000));
// Colors
const generateRandomColor = () => {
  const existingBudgetLength = fetchData("budgets")?.length ?? 0;
  return `${existingBudgetLength * 34} 65% 50%`;
}
// Local storage
export const fetchData = (key) => {
  return JSON.parse(localStorage.getItem(key));
};
// Create budget panum ithu 
export const createBudget = ({ name, amount }) => {
  const newItem = {
    id: crypto.randomUUID(),
    name: name,
    createdAt: Date.now(),
    amount: +amount,
    color: generateRandomColor()
  };
  const existingBudgets = fetchData("budgets") ?? [];
  return localStorage.setItem("budgets", JSON.stringify([...existingBudgets, newItem]));
}

// Create expense pannum ithu 
export const createExpense = ({ name, amount, budgetId }) => {
  const newItem = {
    id: crypto.randomUUID(),
    name: name,
    createdAt: Date.now(),
    amount: +amount,
    budgetId: budgetId
  };
  const existingExpenses = fetchData("expenses") ?? [];
  return localStorage.setItem("expenses", JSON.stringify([...existingExpenses, newItem]));
}

// local storage data va delete pannu 
export const deleteItem = ({ key }) => {
  return localStorage.clear(key);
}

// Calculate expense
export const calculateExpense = (budgetId) => {
  const expenses = fetchData("expenses") ?? [];
  const budgetSpent = expenses.reduce((acc, expense) => {
    if (expense.budgetId !== budgetId) return acc;
    return acc + expense.amount;
  }, 0);
  return budgetSpent;
}
//percentage
export const getPercentage = (amount) => {
  return amount .toLocaleString(undefined, {
    style: "percent",
    minimumFractionDigits: 0
  })
}
//date vaagurathuku 
export const formatDateToLocaleString = (epoch) => new Date(epoch).toLocaleDateString();
// getAllMatchingItems
export const getAllMatchingItems = ({ category, key, value }) => {
  const data = fetchData(category) ?? [];
  return data.filter((item) => item[key] === value);
}
//delete items 
export const deleteItems = ({ key,id}) => {
  const existingData = fetchData(key);
  if (id)
  {
    const newData = existingData.filter((item) => item.id !== id);
  return localStorage.setItem(key, JSON.stringify(newData));
  }
  return localStorage.removeItem(key);
}
// Expense calculation
export const expenseCalculation = (amt) => {
  if(amt == null )
    {
      return NaN
    }
  return amt.toLocaleString(undefined, {
    style: "currency",
    currency: "INR"
  });
}
