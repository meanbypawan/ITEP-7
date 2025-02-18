import Third from "./Third";

function Second({counter,setCounter}){
    return <>
      <h3>Second Component..{counter}</h3>
      <Third counter={counter} setCounter={setCounter}/>
    </>
}

export default Second;