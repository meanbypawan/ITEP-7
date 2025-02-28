import { useSelector } from "react-redux";

function Second(){
    const {counter,evenCounter} = useSelector((store)=>store.DataCounter);
    const {m2} = useSelector((store)=>store.WishingMessages);
    return <>
      <h3>Second Component...({m2})</h3>
      <label>Counter : {counter}, Even counter : {evenCounter}</label>
    </>
}

export default Second;