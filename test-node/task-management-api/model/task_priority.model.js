import { DataTypes } from "sequelize";
import sequelize from "../db/dbConfig.js";

const Task_Priority = sequelize.define("task_priority",{
  id:{
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  priority: DataTypes.STRING
});

sequelize.sync().then(result=>{
    console.log("Database synced | Task_Priority Created");
}).catch(err=>{
    console.log(err);
})
export default Task_Priority;