import Table from "../Components/Table";
import { fetchData } from "../helper";
import { useLoaderData } from "react-router-dom";
export function expensesLoader() {
    const expenses = fetchData("expenses");
    return {expenses};
  }
const ExpensesPage = () => {
    const {expenses} = useLoaderData();
  return ( 
    <div className="grid-lg">
       <h1>All Expenses</h1>
       {
        expenses && expenses.length > 0 
        ?( 
              <div className="grid-md">
                <h2>Recent Expense <small>({expenses.length})</small></h2>
                <Table expenses={expenses}/>
              </div>
        )
        : <p> No Expenses</p>
       }
    </div>
  )
}

export default ExpensesPage