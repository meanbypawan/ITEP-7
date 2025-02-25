export const isLoggedIn = ()=>{
   return !!sessionStorage.getItem("isLoggedIn");
   /*if(sessionStorage.getItem("isLoggedIn"))
     return true;
   return false;  
   */
}