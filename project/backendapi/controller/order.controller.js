import { Order } from "../model/order.model.js"

export const orderList = (request,response,next)=>{
    console.log(request.headers.authorization);
    console.log(request.body);
    Order.find({userId: request.body.userId})
    .then(result=>{
        return response.status(200).json({orders: result});
    }).catch(err=>{
        return response.status(500).json({error:"Internal Server Error.."});
    })

}
export const placeOrder = (request,response,next)=>{
    Order.create(request.body)
    .then(result=>{
        return response.status(201).json({message: "Order placed successfully",orderDetails: result});
    }).catch(err=>{
        console.log(err);
        return response.status(500).json({error: "Internal Server Error"});
    })
}