import axios from "axios";
import { useEffect, useState } from "react";
import apis from "../../apis";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Product() {
    const [productList, setProductList] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        axios.get(apis.PRODUCT_LIST)
            .then(response => {
                setProductList(response.data.products);
            }).catch(err => {
                toast.error("Error in loading products..");
            })
    }, []);
    const handleViewMore = (productId)=>{
       navigate(`/view-more/${productId}`);
    }
    return <>
        <ToastContainer/>
        <div className="container mt-2">
            <div className="row">
                {productList.map((product,index)=><div key={index} className="col-md-3 p-2">
                    <div className="d-flex flex-column align-items-center" style={{width:"100%", height:"auto",boxShadow:"10px 10px 10px grey"}}>
                      <img src={product.thumbnail} width="100%" height="200px"/>
                      <h6>{product.title.substring(0,25)}</h6>
                      <h3>{product.price} Rs.</h3>
                      <button onClick={()=>handleViewMore(product._id)} className="btn btn-warning" style={{width:"100%"}}>View more</button>
                    </div>
                </div>)}
            </div>
        </div>
    </>
}

export default Product;