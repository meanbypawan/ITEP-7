import mongoose from "mongoose";
const orderSchema = new mongoose.Schema({
    pid:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "product"
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    name:String,
    contact:String,
    address:String,
    billAmount:Number,
    orderDate:{
        type: Date,
        default: Date.now()
    }
});
export const Order = mongoose.model("order",orderSchema);