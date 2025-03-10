import { Route, Routes } from "react-router-dom";
import SignIn from "./components/user/SignIn";
import SignUp from "./components/user/SignUp";

function RouteConfig(){
    return <>
     <Routes>
        <Route path="/" element={<SignIn/>}/>
        <Route path="sign-up" element={<SignUp/>}/>
     </Routes>
    </>
}

export default RouteConfig;