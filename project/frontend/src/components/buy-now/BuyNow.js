import { useLocation, useNavigate } from "react-router-dom";
import {useSelector} from "react-redux";
import { useRef } from "react";
import axios from "axios";
import apis from "../../apis";
import { toast, ToastContainer } from "react-toastify";
function BuyNow() {
    const navigate = useNavigate();
    const location = useLocation();
    let product = location.state.params.product;
    const {user} = useSelector((store)=>store.User);
    let nameInput = useRef();
    let contactInput = useRef();
    let addressInput = useRef();
    const handlePlaceOrder = (event)=>{
        event.preventDefault();
        let name = nameInput.current.value;
        let contact = contactInput.current.value;
        let address = addressInput.current.value;
        let pid = product._id;
        let title = product.title;
        let userId = user._id;
        let billAmount = (product?.price-(product?.price*product?.discountPercentage)/100).toFixed(2);
        axios.post(apis.PLACE_ORDER,{name,contact,address,pid,title,billAmount,userId})
        .then(response=>{
            console.log(response.data);
            toast.success(response.data.message);
        }).catch(err=>{
            console.log(err);
            toast.error("Oops! something went wrong..");
        })
    }
    return <>
        <ToastContainer/>
        <div className="container mt-2">
            <button onClick={()=>navigate(-1)} className="btn btn-secondary">Back</button>
        </div>
        <div className="container mt-5 border p-2">
            <p><b>Item purchase : </b>{product?.title}</p>
            <p><b>Brand : </b>{product?.brand}</p>
            <p><b>Bill Amount : </b><label className="bg-warning p-1 ml-3 text-white" style={{borderRadius:"10px"}}>{(product?.price-(product?.price*product?.discountPercentage)/100).toFixed(2)} Rs.</label></p>
        </div>
        <div className="container">
            <div className="form-group mt-5">
                <label>Name</label>
                <input ref={nameInput} type="text" value={user.name} className="form-control"/>
            </div>
            <div className="form-group">
                <label>Contact number</label>
                <input ref={contactInput} type="text" value={user.contact} className="form-control"/>
            </div>
            <div className="form-group">
                <label>Address</label>
                <textarea ref={addressInput} className="form-control" value={user.address}></textarea>
            </div>
            <div className="form-group">
                <button onClick={handlePlaceOrder} className="btn btn-success">Place order</button>
            </div>
          
        </div>
    </>
}

export default BuyNow;