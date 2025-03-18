import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import {toast, ToastContainer} from "react-toastify";
import apis from "../../apis";
import axios from "axios";
function SignUp(){
    const nameInput = useRef();
    const emailInput = useRef();
    const passwordInput = useRef();
    const contactInput = useRef();
    const addressInput = useRef();
    const navigate = useNavigate();
    const handleSubmit = async (event)=>{
       try{ 
        event.preventDefault();
        let name = nameInput.current.value;
        let email = emailInput.current.value;
        let password = passwordInput.current.value;
        let contact = contactInput.current.value;
        let address = addressInput.current.value;
        let response = await axios.post(apis.SIGN_UP,{name,email,password,contact,address});
        navigate("/verify-account",{state:{params:{userId: response.data.user._id,otp: response.data.user.OTP}}}); 
       }
       catch(err){
          toast.error("Oops! something went wrong | Try after sometime");
          console.log(err);
       }
    }
    return <>
       <ToastContainer/>
       <div className="d-flex justify-content-center align-items-center" style={{height:"600px"}}>
        <div className="form-container" style={{width:"30%",height:"auto",boxShadow:"10px 10px 10px grey"}}>
          <div className="bg-secondary text-white p-2 text-center">
            <lable style={{fontWeight:"bolder"}}>Sign up</lable>
          </div>
          <form className="p-3" onSubmit={handleSubmit}>
            <div className="form-group">
              <input ref={nameInput} type="text" placeholder="Let me know your name" className="form-control"/>
            </div>
            <div className="form-group">
              <input ref={emailInput} type="email" placeholder="Let me know your email id" className="form-control"/>
            </div>
            <div className="form-group">
              <input ref={passwordInput} type="password" placeholder="Create strong password" className="form-control"/>
            </div>
            <div className="form-group">
              <input ref={contactInput} type="text" placeholder="Let me know your contact number" className="form-control"/>
            </div>
            <div className="form-group">
              <textarea ref={addressInput} className="form-control" placeholder="Type your address here"></textarea>
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-secondary" style={{width:"100%"}}>Submit</button>
            </div>
            <div className="form-group text-center d-flex flex-column">
              <Link to="/sign-in">
                <label className="text-primary" style={{cursor:"pointer"}}>Already hava account ?</label>
              </Link>
            </div>
          </form>
        </div>
       </div>
    </>
}

export default SignUp;