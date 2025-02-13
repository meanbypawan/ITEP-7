import { Component } from "react";
import First from "./components/First";
class App extends Component{
   constructor(){
    super();
    this.state = {
      counter: 100,
      messageFromChild: ""
    }
    console.log("Constructor executed...");
   }
   componentDidMount(){
    console.log("Component Did Mount executed...");
   }
   componentDidUpdate(){
    console.log("component did update executed...");
   }
   getDataFromChild = (dataFromChild)=>{
     this.setState({messageFromChild: dataFromChild});
   }
   shouldComponentUpdate(nextProps, nextState){
    console.log(nextProps);
    console.log(nextState);
    if(nextState.counter%2)
     return false;
    return true;
   }
   render(){
    console.log("render executed..");
    let message = "Hello Child ! How are you";
    return <>
       <h2>App Component....Message From Child :{this.state.messageFromChild} <button onClick={()=>this.setState({counter: this.state.counter + 1})}>Counter : {this.state.counter}</button></h2>
       <First counter={this.state.counter} getDataFromChild={this.getDataFromChild}/>
    </>
   }
   componentWillUnmount(){
    console.log("component will unmount executed....");
   }
}

export default App;