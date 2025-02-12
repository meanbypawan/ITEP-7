import { Component } from "react";

class Header extends Component{
    render(){
        return <>
           <div className="bg-danger d-flex justify-content-center align-items-center" style={{height:"60px"}}>
               <label className="text-white" style={{fontWeight:"bold",fontSize:"20px"}}>Student App</label>
           </div>
        </>
    }
}
export default Header;