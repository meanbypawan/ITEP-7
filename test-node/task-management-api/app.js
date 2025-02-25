import express from "express";
import AdminRouter from "./routes/admin.route.js";
import TaskPriorityRouter from "./routes/task_priority.route.js";
import TaskRouter from "./routes/task.route.js";
import bodyParser from "body-parser";
import association from "./model/association.js";
import cors from "cors";
const app = express();
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use("/admin",AdminRouter);
app.use("/task_priority",TaskPriorityRouter);
app.use("/task",TaskRouter);
app.listen(3000,()=>{
    console.log("Server started at http://localhost:3000");
});