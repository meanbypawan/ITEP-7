import Task from "../model/task.model.js";
import TaskPriority from "../model/task_priority.model.js";

export const fetchTaskById = (request,response,next)=>{
  let priorityId = request.params.priorityId;
  Task.findByPriority(priorityId)
  .then(result=>{
    console.log(result);
    return response.render("all_task.ejs",{taskList: result});
  }).catch(err=>{
    return response.render("error.ejs");
  })
}
export const fetchTask = (request,response,next)=>{
  Task.findAll()
  .then(result=>{
    console.log(result);
    return response.render("all_task.ejs",{taskList: result});
  }).catch(err=>{
    return response.render("error.ejs");
  })
}
export const createTask = async (request,response,next)=>{
  try{  
    let {title,description,priorityId} = request.body;
    let status = "Active";
    let date = new Date();
    date = date.getDate() +"/"+(date.getMonth()+1)+"/"+date.getFullYear();
    let isCreated = await Task.create({title,description,priorityId,status,date});
    return response.redirect("/task/create-task"); 
  }
  catch(err){
    return response.render("error.ejs");
  }  
}
export const createTaskPage = async (request,response,next)=>{
   try{ 
    let taskPriorities = await TaskPriority.findAll();
    return response.render("create_task.ejs",{taskPriorities});
   }
   catch(err){
    return response.render("error.ejs");
   }
}

export const dashBoardPage = (request,response,next)=>{
  return response.render("dashboard.ejs");
}