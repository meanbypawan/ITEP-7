import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    contact:{
        type: Number
    },
    address:{
        type: String
    },
    OTP:String
});

export const User = mongoose.model("user",userSchema);