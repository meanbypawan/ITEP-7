import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/compandydb")
.then(()=>{
    console.log("Database Connected....");
}).catch(err=>{
    console.log(err);
});

export default mongoose.connection; // db