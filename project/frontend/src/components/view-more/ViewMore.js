import { useParams } from "react-router-dom";

function ViewMore(){
    const {productId} = useParams();
    console.log(productId);
    return <>
      <h1>View more component...</h1>
    </>
}

export default ViewMore;