import express from "express";
import AdminRouter from "./routes/admin.route.js";
import bodyParser from "body-parser";
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use("/admin",AdminRouter);

app.listen(3000,()=>{
    console.log("Server started at http://localhost:3000");
});