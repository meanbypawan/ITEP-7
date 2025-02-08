import Task from "../model/task.model.js"
import Task_Priority from "../model/task_priority.model.js";

export const createTask = (request,response,next)=>{
  Task.create(request.body)
  .then(result=>{
    return response.status(201).json({message:"Task created",task:result.dataValues});
  }).catch(err=>{
    return response.status(500).json({error:"Internal Sever Error"});
  })
}

export const fetch = (request,response,next)=>{
    Task.findAll({raw: true,include:{model:Task_Priority}})
    .then(result=>{
        return response.status(200).json({tasks: result});
    }).catch(err=>{
        return response.status(500).json({error: "Internal Server Error"});
    });
}

export const removeTask = (request,response,next)=>{
    let id = request.params.id;
    Task.destroy({where:{id}})
    .then(result=>{
        console.log(result);
        return response.status(200).json({message:"Task removed",result});
    }).catch(err=>{
        return response.status(500).json({error:"Internal Server Error"});
    })
}
export const updateTask = (request,response,next)=>{
   let id = request.params.id;
   let {status,taskPriorityId} = request.body;
   Task.update({status,taskPriorityId},{where:{id}})
   .then(result=>{
    console.log(result[0]);
    return result[0] ? response.status(200).json({message:"Update success",result}): response.status(404).json({error: "Request resouce not available | Id not found"});
   }).catch(err=>{
    return response.status(500).json({error:"Internal Server Error"});
   })
}
















