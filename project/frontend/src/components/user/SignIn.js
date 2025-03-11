import axios from "axios";
import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import {useDispatch} from "react-redux";
import apis from "../../apis";
import { setUser } from "../../redux-config/UserSlice";

function SignIn(){

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleSubmit = async(event)=>{
       try{ 
        event.preventDefault();
        let response = await axios.post(apis.SIGN_IN,{email,password});
        toast.success("Sign in success");
        dispatch(setUser(response.data));
        navigate("/");
       }
       catch(err){
        toast.error(err.response.data.error);
       }
    }
    return <>
    <ToastContainer/>
    <div className="d-flex justify-content-center align-items-center" style={{height:"600px"}}>
     <div className="form-container" style={{width:"30%",height:"auto",boxShadow:"10px 10px 10px grey"}}>
       <div className="bg-secondary text-white p-2 text-center">
         <lable style={{fontWeight:"bolder"}}>Sign in</lable>
       </div>
       <form className="p-3" onSubmit={handleSubmit}>
         <div className="form-group">
           <input onChange={(event)=>setEmail(event.target.value)}  type="email" placeholder="Let me know your email id" className="form-control"/>
         </div>
         <div className="form-group">
           <input onChange={(event)=>setPassword(event.target.value)} type="password" placeholder="Create strong password" className="form-control"/>
         </div>
         <div className="form-group">
           <button disabled={(email && password)? false: true} type="submit" className="btn btn-secondary" style={{width:"100%"}}>Submit</button>
         </div>
         <div className="form-group text-center d-flex flex-column">
           <Link to="/sign-up">
            <label className="text-primary" style={{cursor:"pointer"}}>Create new account ?</label>
           </Link>
           <label className="text-secondary" style={{cursor:"pointer"}}>Forget password ?</label>
         </div>
       </form>
     </div>
    </div>
 </>
}

export default SignIn;