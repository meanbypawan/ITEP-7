import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct, removeProduct } from "./redux-config/ProductSlice";

function App(){
  const dispatch = useDispatch();
  const {productList,isLoading,error} = useSelector((store)=>store.ProductData);
  useEffect(()=>{
    dispatch(fetchProduct());
  },[]);
  return <>
    <div className="container mt-2 d-flex justify-content-center align-items-center" style={{minHeight:"600px"}}>
      {isLoading?<div className="spinner-border"></div> : <table className="table">
        <thead>
          <tr>
            <td>S.no</td>
            <td>Image</td>
            <td>Title</td>
            <td>Price</td>
            <td>Delete</td>
          </tr>
        </thead>
        <tbody>
          {productList.map((product,index)=><tr key={index}>
            <td>{index+1}</td>
            <td>
              <img src={product.thumbnail} width="100px" height="100px"/>
            </td>
            <td>{product.title}</td>
            <td>{product.price}</td>
            <td>
              <button onClick={()=>dispatch(removeProduct(product.id))} className="btn btn-outline-danger">Delete</button>
            </td>
          </tr>)}
        </tbody>
      </table>}
    </div>
  </>
}
export default App;