import { Component } from "react";

export default class MultiCounter extends Component{
    constructor(){
        super();
        this.state = {
            counter : 100,
            oddCounter: 1,
            evenCounter:0
        }

    }
    incrementCounter = ()=>{
        this.setState({counter: this.state.counter+1});
    }
    incrementEvenCounter = ()=>{
       this.setState({evenCounter: this.state.evenCounter + 2});   
    }
    incrementOddCounter = ()=>{
        this.setState({oddCounter: this.state.oddCounter + 2});
    }
    render(){
        return <>
          <h3>Multi Counter Component...</h3>
          <button onClick={this.incrementCounter}>Counter : {this.state.counter}</button>
          <button onClick={this.incrementEvenCounter}>Even Counter : {this.state.evenCounter}</button>
          <button onClick={this.incrementOddCounter}>Odd Counter : {this.state.oddCounter}</button>
        </>
    }
}