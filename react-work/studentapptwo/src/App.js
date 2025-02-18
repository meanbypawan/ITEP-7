import { useRef, useState } from "react";
import StudentData from "./Data";
import StudentList from "./components/StudentList";
import AddStudent from "./components/AddStudent";
function App({message}){
  const [studentList,setStudentList] = useState(StudentData);
  const [branchList,setBranchList] = useState(["CS","IT","CV","Mech"]);
  const [defaultBranch,setDefaultBranch] = useState("All");
 
  const removeStudent = (roll)=>{
   if(window.confirm("Do you want to delete it ?")){ 
    let index =  studentList.findIndex((student)=>{return student.roll == roll});
    studentList.splice(index,1);
    setStudentList([...studentList]);
   } 
  }
  return <>
     <div className="bg-danger">
      <h3 className="text-white text-center p-3">Student App</h3>
     </div>
     <div className="container mt-3">
      <AddStudent studentList={studentList} setStudentList={setStudentList} defaultBranch={defaultBranch} branchList={branchList}  setDefaultBranch={setDefaultBranch
      }/>
      <StudentList studentList={studentList} defaultBranch={defaultBranch} removeStudent={removeStudent}/>
     </div>
  </>
}
export default App;