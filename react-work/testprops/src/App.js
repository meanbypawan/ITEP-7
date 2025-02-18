import { useState } from "react";
import First from "./components/First";

function App(){
  const [counter,setCounter] = useState(100);
    
  const sayHello = ()=>{
    window.alert("Hello Students...");
  }
  return <>
     <h3>App Component...</h3>
     <First setCounter={setCounter} m1="Hello" m2="Hii" sayHello={sayHello} counter={counter}/>
  </>
}

export default App;