import { useEffect, useReducer, useRef } from "react";
import Header from "./Header";
import axios from "axios";
import api from "../api";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

function CreateNewTask(){
    const [priorityList,setPriorityList] = useState([]);
    let titleRef = useRef();
    let descriptionRef = useRef();
    let priorityRef = useRef();
    useEffect(()=>{
      loadTaskPriorites();
    },[]);
    const loadTaskPriorites = async()=>{
       try{
        let response = await axios.get(api.TASK_PRIORITES);
        console.log(response.data.priorites);
        setPriorityList(response.data.priorites);
       }
       catch(err){
        console.log(err);
       }
    }
    const handleSubmit = async (event)=>{
     try{ 
      event.preventDefault();
      let title = titleRef.current.value;
      let description = descriptionRef.current.value;
      let priority = priorityRef.current.value;

      let response = await axios.post(api.CREATE_TASK,{title,description,taskPriorityId: priority});
      console.log(response.data);
      toast.success("Task created successfully..");
     }
     catch(err){
      console.log(err);
     }
    }
    return <>
      <ToastContainer/>
      <Header/>
      <div className="container mt-5">
         <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input ref={titleRef} type="text" className="form-control" placeholder="Enter task title"/>
          </div>
          <div className="form-group">
            <textarea ref={descriptionRef} placeholder="Enter task description" className="form-control"></textarea>
          </div>
          <div className="form-group">
            <select ref={priorityRef} className="form-control">
              <option>Select task priority</option>
              {priorityList.map((obj,index)=><option key={index} value={obj.id}>{obj.priority}</option>)}
            </select>
          </div>
          <div className="form-group">
            <button className="btn btn-primary" type="submit">Create</button>
          </div>
         </form>
      </div>
    </>
}

export default CreateNewTask;