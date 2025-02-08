import { DataTypes } from "sequelize";
import sequelize from "../db/dbConfig.js";

const Task = sequelize.define("task",{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: DataTypes.STRING,
    status:{
        type: DataTypes.STRING,
        defaultValue: "Active"
    },
    description:DataTypes.STRING
});

export default Task;