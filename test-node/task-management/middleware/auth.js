export const auth = (request,response,next)=>{
    if(request.session.isLoggedIn == true)
       next();
    else
     return response.redirect("/admin/sign-in");   
}