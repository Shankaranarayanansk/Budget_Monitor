//color generator 
 const generateRandomColor = () => {
  const existingBudgetsLength = fetchData("Budgets")?.length ?? 0;
  return `${existingBudgetsLength * 34} 65% 50% `;
};    
// Local storage
export const fetchData = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

// set item
export const createBudget = ({ name, amount }) => {
  const item = {
    id:crypto.randomUUID(),
    name : name,
    createdAt : Date.now(),
    amount :+amount,
    color : generateRandomColor()
  }
  const existing = fetchData("Budgets")??[];
  return localStorage.setItem("Budgets",JSON.stringify([...existing,item]));  
};
// delete item
export const deleteItem = ({ key }) => {
  return localStorage.removeItem(key);
};
