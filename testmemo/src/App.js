import { useCallback, useMemo, useState } from "react";
import First from "./components/First";
import FirstMemoized from "./components/First";
import Second from "./components/Second";
import Third from "./components/Third";

function App(){
  const [counter,setCounter] = useState(100);
  
  const incrementCounter = useCallback(()=>{
    setCounter(counter + 1);
  },[counter]);
  let data = {m1:"Hello",m2:"Hi"};
  data = useMemo(()=>data,[]);
  console.log("App Render...");
  return <>
    <h1>App Component....</h1>
    <button onClick={incrementCounter}>{counter}</button>
    <FirstMemoized/>
    <Second a={200} message="Hello"/>
    <Third data={data} incrementCounter={incrementCounter}/>
  </>
}

export default App;