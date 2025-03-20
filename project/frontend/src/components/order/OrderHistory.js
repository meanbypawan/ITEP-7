import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import apis from "../../apis";

function OrderHistory(){
    const {user,token} = useSelector((store)=>store.User);
    const [orderList,setOrderList] = useState([]);
    useEffect(()=>{
        loadOrders();
    },[]);
    const loadOrders = async()=>{
        try{
         let response = await axios.post(apis.ORDER_LIST,{userId: user._id},{
            headers: { Authorization: `Bearer ${token}` }
            });
         setOrderList(response.data.orders);
        }
        catch(err){
            console.log(err);
        }
    }
    return <>
      <div className="container">
        <h3>Order History</h3>
      </div>
    </>
}

export default OrderHistory;