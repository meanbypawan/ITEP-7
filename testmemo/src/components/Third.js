import React from "react";
function Third({data,incrementCounter}){
    console.log("Third render...");
    return <>
      <h1>Third Component...{data.m1} : {data.m2}</h1>
      <button onClick={incrementCounter}>Increment Counter</button>
    </>
}

export default React.memo(Third);