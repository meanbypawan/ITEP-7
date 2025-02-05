import Admin from "../model/admin.model.js";

export const signIn = (request,response,next)=>{
    Admin.findAll({raw: true,where:{email: request.body.email, password: request.body.password}})
    .then(result=>{
        return result.length ? response.status(200).json({message: "Sign in success",user: result[0]}) : response.status(401).json({error: "Bad request | Invalid email or password"});
    }).catch(err=>{
        return response.status(500).json({error: "Internal Server Error"});
    })
}
export const signup = (request,response,next)=>{
    let {email,password} = request.body;
    Admin.create({email, password})
    .then(result=>{
      return response.status(201).json({message: 'Sign up success',user: result.dataValues});
    }).catch(err=>{
      return response.status(500).json({error: "Internal Server Error"}); 
    });
}