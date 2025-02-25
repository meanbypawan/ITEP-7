import { Route, Routes } from "react-router-dom";
import DashBoard from "./DashBoard";
import CreateNewTask from "./CreateNewTask";
import AllTask from "./AllTask";
import CompletedTask from "./CompletedTask";
import PendingTask from "./PendingTask";
import SignIn from "./SignIn";
import ProtectedRoute from "./ProtectedRoute";

function RouteConfig(){
    return <>
      <Routes>
       <Route path="/" element={<SignIn/>}/>
       <Route path="dashboard" element={<ProtectedRoute><DashBoard/></ProtectedRoute>}/>
       <Route path="create-new-task" element={<ProtectedRoute><CreateNewTask/></ProtectedRoute>}/>
       <Route path="view-all-task" element={<ProtectedRoute><AllTask/></ProtectedRoute>}/>
       <Route path="completed-task" element={<ProtectedRoute><CompletedTask/></ProtectedRoute>}/>
       <Route path="pending-task" element={<ProtectedRoute><PendingTask/></ProtectedRoute>}/>
       <Route path="sign-in" element={<SignIn/>}/>
     </Routes>
    </>
}

export default RouteConfig;