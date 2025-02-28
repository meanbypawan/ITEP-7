import { useSelector } from "react-redux";

function First(){
    const {counter,evenCounter} = useSelector((store)=>store.DataCounter);
    const {m1} = useSelector((store)=>store.WishingMessages);
    return <>
      <h3>First Component...({m1})</h3>
      <label>Counter : {counter}, Even Counter : {evenCounter}</label>
    </>
}

export default First;