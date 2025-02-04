import pool from "../db/dbConfig.js";
import Admin from "../model/admin.model.js";

export const signout = (request,response,next)=>{
  request.session.isLoggedIn = false;
  request.session.currentUser = null;
  request.session.destroy();
  return response.redirect("/admin/sign-in");
} 
export const singInPage = (request,response,next)=>{
    return response.render("signin.ejs");
}

export const signIn = (request,response,next)=>{
    let {email,password} = request.body;
    let admin = new Admin(null,email,password);
    admin.authenticate().then(result=>{
      request.session.isLoggedIn = true;
      request.session.currentUser = email;
      return result.length ? response.redirect("/task/dashboard") : response.redirect("/admin/sign-in");
    }).catch(err=>{
      return response.render("error.ejs");
    });
}