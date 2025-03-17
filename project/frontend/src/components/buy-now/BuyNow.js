import { useLocation, useNavigate } from "react-router-dom";

function BuyNow() {
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location);
    return <>
        <div className="container mt-2">
            <button onClick={()=>navigate(-1)} className="btn btn-secondary">Back</button>
        </div>
        <div className="container">
          <h1>Buy now component...</h1>
        </div>
    </>
}

export default BuyNow;