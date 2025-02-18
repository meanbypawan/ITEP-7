import { useContext } from "react";
import { CounterContext, MessageContext } from "../App";

function Fourth(){
    const {counter , setCounter} = useContext(CounterContext);
    const {m1,m2,m3} =  useContext(MessageContext);
    return <>
       {m1} : {m2} : {m3}
       <h3>Fourth Component...{counter}</h3>
       <button onClick={()=>setCounter(counter+1)}>Increment Counter</button>
    </>
}

export default Fourth;