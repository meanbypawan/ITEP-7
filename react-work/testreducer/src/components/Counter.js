import { useReducer } from "react";

function Counter(){
  //  state = {counter:100}
  // action = {type:"",payload: InputValue}
  const [state,dispatch] = useReducer((state,action)=>{
     console.log(action);
     if(action.type == "increment"){
        state.counter = state.counter + 1;
     }
     else if(action.type == "decrement"){
        state.counter = state.counter - 1;
     }
     else if(action.type == "custom-increment"){
       state.counter = state.counter + action.payload;
     }
     return {...state};
  },{counter:100});
  return <>
     <h3>Counter Component....</h3>
     <label>{state.counter}</label><br/>
     <button onClick={()=>dispatch({type:"increment"})}>Increment</button>
     <button onClick={()=>dispatch({type:"decrement"})}>Decrement</button>
     <button onClick={()=>dispatch({type:"custom-increment",payload: 5})}>Customer Increment</button>
  </>
}

export default Counter;