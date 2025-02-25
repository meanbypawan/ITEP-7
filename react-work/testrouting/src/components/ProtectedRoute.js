import { Navigate, useNavigate } from "react-router-dom";
import { isLoggedIn } from "../auth";

function ProtectedRoute({children}){
    if(isLoggedIn())
      return children;
    else
       return <Navigate to="/"/>
}

export default ProtectedRoute;