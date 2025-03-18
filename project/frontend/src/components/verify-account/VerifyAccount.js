function VerifyAccount(){
    return <>
      <div className="d-flex justify-content-center align-items-center" style={{height:"550px"}}>
        <div className="p-3" style={{width:"300px",height:"auto",boxShadow:"10px 10px 10px grey"}}>
            <div className="form-group">
               <label>Enter OTP</label>
               <input type="text" className="form-control"/>
            </div>
            <div className="form-group">
                <button className="btn btn-warning" style={{width:"100%"}}>Verify</button>
            </div>
        </div>
      </div>
    </>
}

export default VerifyAccount;