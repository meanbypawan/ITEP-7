function Fourth({counter,setCounter}){
    return <>
      <h3>Fourth Component...{counter}</h3>
      <button onClick={()=>setCounter(counter+1)}>Increment Counter</button>
    </>
}

export default Fourth;