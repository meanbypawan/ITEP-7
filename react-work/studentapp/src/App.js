import Header from "./components/Header";
import Data from "./components/Data";
const { Component } = require("react");

class App extends Component{
  constructor(){
    super();
    this.state = {
      studentList: Data,
      branchList: ["CS","IT","CV","Mech"], 
      buttonDecoration:{
       width: "100px"
      },
      defaultBranch: "All"
    }
    
  }
  addStudent = ()=>{
     let roll = this.roll.value;
     let name = this.name.value;
     let gender = this.gender.value;
     let branch = this.branch.value;
     this.setState({studentList: [...this.state.studentList,{roll,name,gender,branch}]})
     /*let roll = document.getElementById("roll").value;
     let name = document.getElementById("name").value;
     let branch = document.getElementById("branch").value;
     let gender = document.getElementById("gender").value;
     let newStudent = {roll,name,branch,gender};
     this.state.studentList.push(newStudent);
     this.setState({studentList: [...this.state.studentList]});
     */
  }
  remove = (rollNumber)=>{
   if(window.confirm("Do you want to delete it ?")){ 
    let index =   this.state.studentList.findIndex((student)=>{return student.roll == rollNumber})
    this.state.studentList.splice(index,1);
    this.setState({studentList:[...this.state.studentList]});
   } 
  }
  render(){
    return <>
       <Header/>
       <div className="container mt-3">
        <div className="row">
          <div className="col-md-6">
            <input ref={(obj)=>this.roll=obj} id="roll" type="text" className="form-control" placeholder="Enter roll number"/>
          </div>
          <div className="col-md-6">
            <input ref={(obj)=>this.name=obj} id="name" type="text" className="form-control" placeholder="Enter student name"/>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-md-6">
            <select ref={(obj)=>this.gender = obj} id="gender" className="form-control">
              <option value="0">Select gender</option>
              <option value="Female">Female</option>
              <option value="Male">Male</option>
            </select>
          </div>
          <div className="col-md-6">
            <select ref={(obj)=>this.branch=obj} id="branch" className="form-control">
              <option value="0">Select branch</option>
              {this.state.branchList.map((branch,index)=>{return <option value={branch} key={index}>{branch}</option>})}
            </select>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-md-6">
            <button onClick={this.addStudent} className="btn btn-success">ADD</button>
          </div>
          <div className="col-md-6">
            <button onClick={()=>this.setState({defaultBranch:"CS"})}  className="btn btn-primary" style={this.state.buttonDecoration}>CS ({this.state.studentList.filter((student)=>{return student.branch == "CS"}).length})</button>
            <button onClick={()=>this.setState({defaultBranch: "IT"})} className="btn btn-warning ml-2" style={this.state.buttonDecoration}>IT ({this.state.studentList.filter((student)=>{return student.branch=="IT"}).length})</button>
            <button onClick={()=>this.setState({defaultBranch:"CV"})} className="btn btn-dark ml-2" style={this.state.buttonDecoration}>CV ({this.state.studentList.filter((student)=>{return student.branch=="CV"}).length})</button>
            <button onClick={()=>this.setState({defaultBranch:"Mech"})} className="btn btn-info ml-2" style={this.state.buttonDecoration}>Mech ({this.state.studentList.filter((student)=>{return student.branch=="Mech"}).length})</button>
            <button onClick={()=>this.setState({defaultBranch: "All"})} className="btn btn-secondary ml-2" style={this.state.buttonDecoration}>Total ({this.state.studentList.length})</button>
          </div>
        </div>
       </div>
       <div className="container mt-3">
        <table className="table">
          <thead>
            <tr>
              <th>Roll no.</th>
              <th>Name</th>
              <th>Gender</th>
              <th>Branch</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {this.state.studentList.filter((student)=>{return (student.branch == this.state.defaultBranch) || this.state.defaultBranch == "All"}).map((student,index)=>{return <tr>
              <td>{student.roll}</td>
              <td>{student.name}</td>
              <td>{student.gender}</td>
              <td>{student.branch}</td>
              <td>
                <button onClick={()=>{this.remove(student.roll)}} className="btn btn-outline-danger">Remove</button>
              </td>
            </tr>})}
          </tbody>
        </table>
       </div>
    </>
  }
}

export default App;