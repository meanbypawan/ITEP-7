import {useSelector} from "react-redux";
import { Navigate } from "react-router-dom";

function ProtectedRoute({children}){
  const {isLoggedIn} = useSelector((store)=>store.User);
  if(isLoggedIn)
    return children;
  else
   return <Navigate to="/sign-in"/>
}

export default ProtectedRoute;