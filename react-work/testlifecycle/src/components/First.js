import { Component, PureComponent } from "react";

class First extends PureComponent{
    
    render(){
        console.log("First component render() called..");
        let data = "Message From First";
        return <>
          <h4>First Component : {this.props.counter}</h4>
          <button onClick={()=>this.props.getDataFromChild(data)}>Send Data</button>
        </>
    }
}

export default First;