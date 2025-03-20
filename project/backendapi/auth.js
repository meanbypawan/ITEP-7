import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const verify = async (request,response,next)=>{
  try{  
   let token = request.headers.authorization.split(" ")[1];
   jwt.verify(token,process.env.SECRET_KEY);
   next();
  }
  catch(err){
    return response.status(401).json({error: "Unauthorized user"});
  }
}