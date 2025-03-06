import express from "express";
import { Employee } from "../model/employee.model.js";
const router = express.Router();

router.get("/list",(request,response,next)=>{
    Employee.aggregate([{
        $match:{salary:{$gte:90000}}
    }]).then(result=>{
        return response.status(200).json({employees: result});
    }).catch(err=>{
        return response.status(500).json({error: "Internal Server Error"});
    })
})
router.post("/create",(request,response,next)=>{
  console.log(request.body);
  Employee.create(request.body)
  .then(result=>{
    return response.status(201).json({message:"Record created",result});
  }).catch(err=>{
    console.log(err);
    return response.status(500).json({error: "Internal server error"});
  })
//   db.collection("employee").insertOne(request.body)
//   .then(result=>{
//     return response.status(201).json({message: "Record created",result});
//   }).catch(err=>{
//     return response.status(500).json({error: "Internal Server Error"});
//   })
});
export default router;