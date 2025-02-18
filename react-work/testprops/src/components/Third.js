import Fourth from "./Fourth";

function Third({counter,setCounter}){
    return <>
      <h3>Third Component...{counter}</h3>
      <Fourth counter={counter} setCounter={setCounter}/>
    </>
}

export default Third;