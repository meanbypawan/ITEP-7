import React from "react";
function Second({a,message}){
    console.log("Second render....");
    return <>
      <h1>Second Component..</h1>
      <p>a : {a}, message: {message}</p>
    </>
}

export default React.memo(Second);