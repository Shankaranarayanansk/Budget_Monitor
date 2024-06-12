import { useLoaderData } from "react-router-dom";
import { createBudget, fetchData } from "../helper";
import Intro from "../Components/Intro";
import { toast } from "react-toastify";
import AddBudgetForm from "../Components/AddBudgetForm";

// loader
export function dashboardLoader() {
  const userName = fetchData("userName");
  const budgets = fetchData("budgets");
  return { userName, budgets }; // ithu give username from local Storage
}
export async function dashboardAction({ request }) {
  const Data = await request.formData();
  const { _action, ...values } = Object.fromEntries(Data);
  console.log(_action); //_action input field la irukura value read pannu la user vantha
  //for new user ku
  if (_action === "newUser")
    try {
      localStorage.setItem("userName", JSON.stringify(values.userName));
      return toast.success("Welcome " + values.userName);
    } catch (e) {
      throw new Error("There was a problem creating your account");
    }
  if (_action === "createBudget") {
    try {
      createBudget({ name: values.newBudget, amount: values.newBudgetAmount });
      return toast.success("Budget Added");
    } catch (e) {
      throw new Error("There was a problem creating your budget");
    }
  }
}

const Dashboard = () => {
  const { userName, budgets } = useLoaderData();

  return (
    <>
      {userName ? (
        <div className="dashboard">
          <h1>
            Welcome buddy ,<span className="accent">{userName}</span>
          </h1>
          <div className="grid-sm">
            {/* {Budget Section} */}
            <div className="grid-lg">
              <div className="flex-lg">
                <AddBudgetForm />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Intro />
      )}
    </>
  );
};

export default Dashboard;
