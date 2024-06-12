import { useLoaderData } from "react-router-dom";
import { fetchData } from "../helper"
import Intro from "../Components/Intro";
import { toast } from "react-toastify";
import AddBudgetForm from "../Components/AddBudgetForm";

// loader
export function dashboardLoader() {
  const userName = fetchData("userName");
  const budgets = fetchData("budgets");
  return { userName, budgets}// ithu give username from local Storage 
}
export async function dashboardAction({request})
{
  const Data = await request.formData();
  const name = Object.fromEntries(Data);
 try
 {
  localStorage.setItem("userName", JSON.stringify(name.userName));
  return toast.success("Welcome " + name.userName);
 }
 catch{
  throw new Error("There was a problem creating your account"); 
 }
}
const Dashboard = () => {
  const { userName ,budgets } = useLoaderData()

  return (
    <>
    {userName ? (
      <div className="dashboard">
        <h1>Welcome buddy ,<span className="accent">{userName}</span></h1>
        <div className="grid-sm">
          {/* {Budget Section} */}
          <div className="grid-lg">
            <div className="flex-lg">
              <AddBudgetForm/>
            </div>
          </div>
        </div>
      </div>
    ) : <Intro/>}
    </>
  )
}

export default Dashboard