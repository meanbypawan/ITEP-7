import { Sequelize } from "sequelize";

const sequelize = new Sequelize("task_management_api","root",'',{
    host: "localhost",
    dialect: 'mysql'
 });
 
sequelize.authenticate()
.then(result=>{
    console.log("Database connnected...");
}).catch(err=>{
    console.log("Database not connected....");
    console.log(err);
});
export default sequelize;