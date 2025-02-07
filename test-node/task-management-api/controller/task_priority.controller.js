import Task_Priority from "../model/task_priority.model.js"

export const createTaskPriority = (request,response,next)=>{
    Task_Priority.bulkCreate(request.body)
    .then(result=>{
        return response.status(201).json({message: "Priority creted",result});
    }).catch(err=>{
        return response.status(500).json({error: "Internal Server Error"});
    })
}

export const fetch = (request,response,next)=>{
    Task_Priority.findAll()
    .then(result=>{
        return response.status(200).json({priorites: result});
    }).catch(err=>{
        return response.status(500).json({error: "Internal Server Error"});
    })
}