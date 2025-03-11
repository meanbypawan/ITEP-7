import mongoose from "mongoose";
const productSchema = new mongoose.Schema({
    id: Number,
    title:String,
    description:String,
    category:String,
    price:Number,
    discountPercentage:Number,
    rating: Number,
    stock:Number,
    brand:String,
    warrantyInformation:String,
    shippingInformation:String,
    availabilityStatus:String,
    reviews:[],
    images:[],
    thumbnail:String
});

export const Product = mongoose.model("product",productSchema);