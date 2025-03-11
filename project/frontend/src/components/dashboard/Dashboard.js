import { useEffect, useState } from "react";
import Header from "../header/Header";
import axios from "axios";
import apis from "../../apis";
import { toast, ToastContainer } from "react-toastify";
import { Outlet } from "react-router-dom";

function Dashboard(){
  
  return <>
    <ToastContainer/>
    <Header/>
    <Outlet/>
  </>
}

export default Dashboard;