import { Route, Routes } from "react-router-dom";
import SignIn from "./components/user/SignIn";
import SignUp from "./components/user/SignUp";
import Dashboard from "./components/dashboard/Dashboard";
import Product from "./components/product/Product";
import Category from "./components/category/Category";
import ViewMore from "./components/view-more/ViewMore";

function RouteConfig(){
    return <>
     <Routes>
        <Route path="/" element={<Dashboard/>}>
          <Route path="" index element={<Product/>}/>
          <Route path="category" element={<Category/>}/>
          <Route path="view-more/:productId" element={<ViewMore/>}/>
        </Route>
        <Route path="sign-up" element={<SignUp/>}/>
        <Route path="sign-in" element={<SignIn/>}/>
     </Routes>
    </>
}

export default RouteConfig;