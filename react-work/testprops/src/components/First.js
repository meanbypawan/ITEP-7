import { useState } from "react";
import Second from "./Second";

function First({m1,m2,sayHello,counter,setCounter}){
    //console.log(props);
    return <>
      <h4>First Component...{counter}</h4>
      {m1} {m2}
      <button onClick={()=>sayHello()}>Say Hello To Parent</button>
      <Second counter={counter} setCounter={setCounter}/>
    </>
}

export default First;