import express from "express";
import AdminRouter from "./route/admin.route.js";
import TaskRouter from "./route/task.route.js";
import bodyParser from "body-parser";
const app = express();

app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
// http://localhost:3000/admin/sign-in
app.use("/admin",AdminRouter);
app.use("/task",TaskRouter);

app.listen(3000,()=>{
    console.log("Server Started....");
});