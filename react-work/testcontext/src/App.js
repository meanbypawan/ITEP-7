import { createContext, useState } from "react";
import First from "./components/First";

export const CounterContext = createContext();
export const MessageContext = createContext();
function App(){
  const [counter,setCounter] = useState(100);
  return <>
    <h1>App Component...</h1>
    <MessageContext.Provider value={{m1:"Hello", m2:"Hi", m3:"Welcome.."}}>
     <CounterContext.Provider value={{counter,setCounter}}>
      <First/>
     </CounterContext.Provider>
    </MessageContext.Provider>
  </>
}
export default App;
