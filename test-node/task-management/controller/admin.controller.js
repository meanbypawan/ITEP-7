import pool from "../db/dbConfig.js";

export const singInPage = (request,response,next)=>{
    return response.render("signin.ejs");
}

export const signIn = (request,response,next)=>{
    let {email,password} = request.body;
    pool.getConnection((err,con)=>{
       if(!err){
         let sql = "select * from admin where email = ? and password = ?";
         con.query(sql,[email,password],(err,result)=>{
            con.release();
            if(!err){
            if(result.length !=0)
              console.log("Sign in success");
            else
              console.log("Sign in failed...");  
            }
        }); 
       }
       else
        console.log(err);
    });
}