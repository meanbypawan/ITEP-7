import { useEffect, useReducer, useState } from "react";
import Header from "./Header";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import api from "../api";
import { isLoggedIn } from "../auth";

function DashBoard() {
  const [taskList, setTaskList] = useState([]);
  useEffect(() => {
    if(isLoggedIn())
      loadTask();
    else
      setTaskList([]);  
  }, []);
  let cssClasses = {
    bgDanger: "bg-danger text-white p-3 d-flex flex-column justify-content-between align-items-center",
    bgWarning: "bg-warning text-white p-3 d-flex flex-column justify-content-between align-items-center",
    bgSuccess: "bg-success text-white p-3 d-flex flex-column justify-content-between align-items-center",
  }
  const loadTask = async () => {
    try {
      let response = await axios.get(api.TASK_LIST);
      console.log(response.data.tasks);
      setTaskList(response.data.tasks);

    }
    catch (err) {
      console.log(err);
    }
  }
  return <>
    <Header />
    <div className="container mt-5">
      <div className="row">
        {taskList?.map((task, index) => <div key={index} className="col-md-3 p-2">
          <div style={{ boxShadow: "10px 10px 10px grey", height: "300px" }}>
            <div className={task.taskPriorityId==3 ? cssClasses.bgDanger : task.taskPriorityId==2 ? cssClasses.bgWarning : cssClasses.bgSuccess} style={{boxShadow: "10px 10px 10px grey", minHeight: "300px", fontWeight: "bold"}}>
              <p className="text-center" style={{fontWeight: "bolder"}}>{task.title}</p>
              <label className="text-center">{task.description}</label>
              <label>Create At : {task.createdAt.toString().slice(0,10)}</label>
              <div className="bg-light p-2 d-flex flex-row justify-content-around" style={{width: "100%"}}>
                <button className="btn btn-primary" style={{width: "40%"}}>Edit</button>
                <button className="btn btn-danger" style={{width: "40%"}}>Delete</button>
              </div>
            </div>

          </div>
        </div>)}
      </div>
    </div>
  </>
}

export default DashBoard;