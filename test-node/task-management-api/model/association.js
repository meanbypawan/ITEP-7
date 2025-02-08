import Task from "./task.model.js";
import Task_Priority from "./task_priority.model.js";

Task_Priority.hasMany(Task);
Task.belongsTo(Task_Priority);


export default {Task,Task_Priority};