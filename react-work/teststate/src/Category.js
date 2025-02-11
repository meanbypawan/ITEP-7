import { Component } from "react";
import Data from "./Data";
export default class Product extends Component{
    constructor(){
        super();
        this.state = {
            productList: Data
        }
    }
    render(){
        console.log(this.state.productList);
        return <>
            <table width="100%" border="1">
               <thead> 
                <tr>
                    <td>Title</td>
                    <td>Image</td>
                    <td>Price</td>
                    <td>Remove</td>
                </tr>
                </thead>
                <tbody>
                {this.state.productList.map((product,index)=>{return <tr key={index}>
                    <td>{product.title}</td>
                    <td>
                        <img src={product.thumbnail} width="100px" height="100px"/>
                    </td>
                    <td>{product.price}</td>
                    <td>
                        <button>Remove</button>
                    </td>
                </tr>})}
               </tbody> 
            </table>
        </>
    }
}