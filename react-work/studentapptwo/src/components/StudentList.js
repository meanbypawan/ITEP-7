function StudentList({studentList,defaultBranch,removeStudent}){
    return <>
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
    </>
}

export default StudentList;