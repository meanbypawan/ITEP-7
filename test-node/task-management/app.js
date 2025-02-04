import express from "express";
import AdminRouter from "./route/admin.route.js";
import TaskRouter from "./route/task.route.js";
import bodyParser from "body-parser";
import session from "express-session";
const app = express();

app.set("view engine","ejs");
app.use(express.static("./public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(session({secret:"dflsfjeoriewruoeuxvnmc",resave:true,saveUninitialized: true}));
// http://localhost:3000/admin/sign-in
app.use("/admin",AdminRouter);
app.use("/task",TaskRouter);

app.listen(3000,()=>{
    console.log("Server Started....");
});