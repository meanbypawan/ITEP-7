import { validationResult } from "express-validator";
import Admin from "../model/admin.model.js";
import bcrypt from "bcryptjs";
export const signIn = async(request,response,next)=>{
    try{
       console.log("Sign in request caught....");
       let {email,password} = request.body;
       console.log(email);
       let user = await Admin.findOne({raw: true,where:{email}});
       if(user){
          let hashPassword = user.password;
          let status = bcrypt.compareSync(password,hashPassword);
          return status ? response.status(200).json({message: "Sign in success",user}) : response.status(401).json({error: "Bad request | Invalid password"});
       }
       else
        return response.status(401).json({error: "Bad request | Invalid email id"});
    }
    catch(err){
      return response.status(500).json({error: "Internal Server Error"});
    }
}
export const signup = (request,response,next)=>{
    const errors = validationResult(request);
    if(errors.isEmpty()){
    let {email,password} = request.body;
    let saltKey = bcrypt.genSaltSync(10);
    password = bcrypt.hashSync(password,saltKey);
    Admin.create({email, password})
    .then(result=>{
      return response.status(201).json({message: 'Sign up success',user: result.dataValues});
    }).catch(err=>{
      console.log(err);
      return response.status(500).json({error: "Internal Server Error"}); 
    });
  }
  else
    return response.status(400).json({error: "Bad request",errors: errors.array()});
}