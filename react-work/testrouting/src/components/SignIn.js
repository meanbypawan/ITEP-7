import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";
function SignIn(){
    const[email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const navigate = useNavigate();
    const handleSubmit = (event)=>{
        console.log(email+"  "+password);
        event.preventDefault();
        axios.post(api.SIGN_IN,{email,password})
        .then((response)=>{
            sessionStorage.setItem("isLoggedIn","true");
            sessionStorage.setItem("currentUserEmail",response.data.user.email);
            navigate("/dashboard");
        }).catch(err=>{
            console.log(err);
        });
    }
    return <>
      <div className="container d-flex flex-row justify-content-center align-items-center" style={{height:"650px"}}>
        <div style={{width:"30%",height:"auto",boxShadow:"10px 10px 10px grey"}}>
            <div className="bg-dark text-white d-flex justify-content-center align-items-center" style={{height:"50px"}}>
                <label style={{fontWeight:"bold"}}>Sign In Here</label>
            </div>
            <form className="p-3 mt-2" onSubmit={handleSubmit}>
                <div className="form-group">
                    <input onChange={(event)=>setEmail(event.target.value)} type="text" className="form-control" placeholder="Enter email id"/>
                </div>
                <div className="form-group">
                    <input onChange={(event)=>setPassword(event.target.value)} type="text" className="form-control" placeholder="Enter password"/>
                </div>
                <div className="form-group">
                    <button className="btn btn-secondary" type="submit">Submit</button>
                </div>
            </form>
        </div>
      </div>
    </>
}

export default SignIn;