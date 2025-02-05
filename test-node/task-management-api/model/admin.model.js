import { DataTypes } from "sequelize";

import sequelize from "../db/dbConfig.js";

const Admin = sequelize.define("admin",{
   id:{
    type:DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
   }, 
   email:{
    type: DataTypes.STRING,
    allowNull: false
   },
   password:{
    type: DataTypes.STRING,
    allowNull: false
   }
});
sequelize.sync()
.then(()=>{
    console.log("Admin model created...");
}).catch(err=>{
    console.log("Something wrong...");
    console.log(err);
});

export default Admin;

/*
  Sequelize model turn into model class and it also provide
  interface to interact with database.
*/