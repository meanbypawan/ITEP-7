import { validationResult } from "express-validator"
import { User } from "../model/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import "dotenv/config";
export const signIn = async (request,response,next)=>{
  try{  
    let {email,password} = request.body;
    let user = await  User.findOne({email});
    if(user){
       let hashPassword = user.password;
       let status =  bcrypt.compareSync(password,hashPassword);
       return status ? response.status(200).json({message: "Sign in success",user,token:generateToken(email)}) : response.status(401).json({error: "Bad request | Invalid password"});
    }
    else
     return response.status(401).json({error: "Bad request | Email id not found"});
  }
  catch(err){
    return response.status(500).json({error: "Internal Server Error"});
  }
}
const generateToken = (userEmail)=>{
   let payload = {subject: userEmail};
   return jwt.sign(payload,process.env.SECRET_KEY);
}
export const signUp = async (request,response,next)=>{
   try{
    let error = validationResult(request);
    if(!error.isEmpty())
      return response.status(401).json({error: "Bad request.."});
    let {password} = request.body;  
    let saltKey =  bcrypt.genSaltSync(10);
    password = bcrypt.hashSync(password,saltKey);
    request.body.password = password;    
    let result = await User.create(request.body);
    return response.status(201).json({message: "User created",user:result});  
   }
   catch(err){
    console.log(err);
    return response.status(500).json({error: "Internal Server Error"});
   }
}