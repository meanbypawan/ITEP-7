import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema({
   name: String,
   salary:Number,
   gender:String,
   skill:String 
});


export const Employee = mongoose.model("employee",employeeSchema);