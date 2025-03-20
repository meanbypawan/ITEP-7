import { Route, Routes } from "react-router-dom";
import SignIn from "./components/user/SignIn";
import SignUp from "./components/user/SignUp";
import Dashboard from "./components/dashboard/Dashboard";
import Product from "./components/product/Product";
import Category from "./components/category/Category";
import ViewMore from "./components/view-more/ViewMore";
import BuyNow from "./components/buy-now/BuyNow";
import ProtectedRoute from "./ProtectedRoute";
import VerifyAccount from "./components/verify-account/VerifyAccount";
import OrderHistory from "./components/order/OrderHistory";

function RouteConfig(){
    return <>
     <Routes>
        <Route path="/" element={<Dashboard/>}>
          <Route path="" index element={<Product/>}/>
          <Route path="category" element={<Category/>}/>
          <Route path="view-more/:productId" element={<ViewMore/>}/>
          <Route path="buy-now" element={<ProtectedRoute><BuyNow/></ProtectedRoute>}/>
          <Route path="order-history" element={<ProtectedRoute><OrderHistory/></ProtectedRoute>}/>
        </Route>
        <Route path="sign-up" element={<SignUp/>}/>
        <Route path="sign-in" element={<SignIn/>}/>
        <Route path="verify-account" element={<VerifyAccount/>}/>

     </Routes>
    </>
}

export default RouteConfig;