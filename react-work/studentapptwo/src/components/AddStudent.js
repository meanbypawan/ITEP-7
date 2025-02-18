import { useRef } from "react";

function AddStudent({studentList,branchList,setStudentList,setDefaultBranch}){
    let rollInput = useRef(); // {current}
    let nameInput = useRef();
    let genderInput = useRef();
    let branchInput = useRef();
    
    return <>
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
          <button className="btn btn-success" onClick={()=>setStudentList([...studentList,{roll:rollInput.current.value,name:nameInput.current.value,gender: genderInput.current.value,branch: branchInput.current.value}])}>ADD</button>
        </div>
        <div className="col-md-6">
          <button className="btn btn-primary" onClick={()=>setDefaultBranch("CS")}>CS ({studentList.filter((student)=>{return student.branch=="CS"}).length})</button>
          <button className="btn btn-danger ml-2" onClick={()=>setDefaultBranch("IT")}>IT ({studentList.filter((student)=>{return student.branch=="IT"}).length})</button>
          <button className="btn btn-warning ml-2" onClick={()=>setDefaultBranch("CV")}>CV ({studentList.filter((student)=>{return student.branch=="CV"}).length})</button>
          <button className="btn btn-dark ml-2" onClick={()=>setDefaultBranch("Mech")}>Mech ({studentList.filter((student)=>{return student.branch=="Mech"}).length})</button>
          <button className="btn btn-secondary ml-2" onClick={()=>setDefaultBranch("All")}>Total ({studentList.length})</button>
        </div>
      </div>
    </>
}

export default AddStudent;