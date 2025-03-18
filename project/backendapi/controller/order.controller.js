import { Order } from "../model/order.model.js"

export const placeOrder = (request,response,next)=>{
    Order.create(request.body)
    .then(result=>{
        return response.status(201).json({message: "Order placed successfully",orderDetails: result});
    }).catch(err=>{
        console.log(err);
        return response.status(500).json({error: "Internal Server Error"});
    })
}