import { useRef, useState } from "react";
import StudentData from "./Data";
function App(){
  const [studentList,setStudentList] = useState(StudentData);
  const [branchList,setBranchList] = useState(["CS","IT","CV","Mech"]);
  const [defaultBranch,setDefaultBranch] = useState("All");
  let rollInput = useRef(); // {current}
  let nameInput = useRef();
  let genderInput = useRef();
  let branchInput = useRef();
  const addStudent = ()=>{
    let roll = rollInput.current.value;
    let name = nameInput.current.value;
    let gender = genderInput.current.value;
    let branch = branchInput.current.value;
    setStudentList([...studentList,{roll,name,gender,branch}]);
  }
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
      <div className="row">
        <div className="col-md-6">
          <input ref={rollInput} type="text" className="form-control" placeholder="Enter roll number"/>
        </div>
        <div className="col-md-6">
          <input ref={nameInput} type="text" className="form-control" placeholder="Enter student name"/>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-md-6">
        <select ref={genderInput} className="form-control">
          <option value="0">Select gender</option>
          <option value="Female">Female</option>
          <option value="Male">Male</option>
        </select>
        </div>
        <div className="col-md-6">
           <select ref={branchInput} className="form-control">
            <option value="0">Select branch</option>
            {branchList.map((branch,index)=>{return <option key={index}>{branch}</option>})}
           </select>
        </div>
      </div>
      <div className="row mt-2 mb-2">
        <div className="col-md-6">
          <button className="btn btn-success" onClick={addStudent}>ADD</button>
        </div>
        <div className="col-md-6">
          <button className="btn btn-primary" onClick={()=>setDefaultBranch("CS")}>CS ({studentList.filter((student)=>{return student.branch=="CS"}).length})</button>
          <button className="btn btn-danger ml-2" onClick={()=>setDefaultBranch("IT")}>IT ({studentList.filter((student)=>{return student.branch=="IT"}).length})</button>
          <button className="btn btn-warning ml-2" onClick={()=>setDefaultBranch("CV")}>CV ({studentList.filter((student)=>{return student.branch=="CV"}).length})</button>
          <button className="btn btn-dark ml-2" onClick={()=>setDefaultBranch("Mech")}>Mech ({studentList.filter((student)=>{return student.branch=="Mech"}).length})</button>
          <button className="btn btn-secondary ml-2" onClick={()=>setDefaultBranch("All")}>Total ({studentList.length})</button>
        </div>
      </div>
      <table className="table">
        <thead>
          <tr>
            <td>S.no</td>
            <td>Roll</td>
            <td>Name</td>
            <td>Gender</td>
            <td>Branch</td>
            <td>Remove</td>
          </tr>
        </thead>
        <tbody>
          {studentList.filter((student)=>{return student.branch == defaultBranch || defaultBranch == "All"}).map((student,index)=>{return <tr key={index}>
            <td>{index+1}</td>
            <td>{student.roll}</td>
            <td>{student.name}</td>
            <td>{student.gender}</td>
            <td>{student.branch}</td>
            <td>
              <button onClick={()=>removeStudent(student.roll)} className="btn btn-outline-danger">Remove</button>
            </td>
          </tr>})}
        </tbody>
      </table>
     </div>
  </>
}
export default App;