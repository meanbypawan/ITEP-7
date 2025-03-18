import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import apis from "../../apis";

function ViewMore(){
    const {productId} = useParams();
    const [product,setProduct] = useState(null);
    const navigate = useNavigate();
    useEffect(()=>{
      loadProductById();
    },[])
    const loadProductById = async()=>{
     let response = await axios.get(apis.PRODUCT_BY_ID+`/${productId}`);
     setProduct(response.data.product);
    }
    const handleBuyNow = ()=>{
      navigate("/buy-now",{state:{params:{product: product}}});
    }
    return <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 d-flex flex-column" style={{boxShadow: "10px 10px 10px grey",height:"500px"}}>
             <img src={product?.thumbnail} width="100%" height="400px"/>
             <div className="d-flex flex-row justify-content-around align-items-center">
               {product?.images.map((imageUrl,index)=><img src={imageUrl} key={index} width="100px" height="80px"/>)}
             </div>
          </div>
          <div className="col-md-6 p-3" style={{boxShadow: "10px 10px 10px grey",height:"500px"}}>
            <div className="d-flex flex-column p-3">
              <h4>{product?.title} [{product?.brand}]</h4>
              <p>{product?.description}</p>
              <p><b>Warranty Inforamtion : </b>{product?.warrantyInformation}</p>
              <p><b>Shipping Information : </b>{product?.shippingInformation}</p>
              <p><b>Availability Status : </b>{product?.availabilityStatus}</p>
              <p><b>Rating : </b><lable className="text-info">{product?.rating}</lable>(5)</p>
              <p><b>Discount : </b>{product?.discountPercentage}%</p>
              <p><b>Offered Price : </b><del className="text-danger">{product?.price}</del><label style={{fontWeight:"bolder",fontSize:"25px"}} className="text-success">{(product?.price - ((product?.price*product?.discountPercentage)/100)).toFixed(2)}</label></p>
              <button onClick={handleBuyNow} style={{width:"100%"}} className="btn btn-warning">Buy now</button>
            </div>
          </div>
        </div>
        {product?.reviews.map((review,index)=><div key={index} className="row mt-3 border p-3">
          <div className="d-flex flex-row justify-content-between" style={{height:"50px", width:"100%"}}>
            <small>{review.reviewerName} : {review.reviewerEmail}</small>
            <small>{review.date}</small>
          </div>
          <p>{review.comment}</p>
        </div>)}
        
      </div>
    </>
}

export default ViewMore;