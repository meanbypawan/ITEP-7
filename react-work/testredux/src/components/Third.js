import { useDispatch } from "react-redux";
import { decrementByPayload, decrementCounter, decrementEvenCounter, incrementByPayload, incrementCounter, incrementEvenCounter } from "../redux-config/DataSlice";

function Third(){
    const dispatch = useDispatch();
    return <>
      <button onClick={()=>dispatch(incrementCounter())}>Increment Counter</button>
      <button onClick={()=>dispatch(decrementCounter())}>Decrement Counter</button>
      
      <button onClick={()=>dispatch(incrementEvenCounter())}>Increment Even Counter</button>
      <button onClick={()=>dispatch(decrementEvenCounter())}>Decrement Even Counter</button>
      <button onClick={()=>dispatch(incrementByPayload(5))}>Increment counter by 5</button>
      <button onClick={()=>dispatch(decrementByPayload(3))}>Decrement counter by 3</button>
    </>
}

export default Third;