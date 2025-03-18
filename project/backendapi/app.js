import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import UserRouter from "./route/user.route.js";
import ProductRouter from "./route/product.route.js";
import OrderRouter from "./route/order.route.js";
import "dotenv/config";

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
mongoose.connect(process.env.MONGODB_URL)
.then(result=>{
   console.log("Atlas connected....");
   app.use("/user",UserRouter);
   app.use("/product",ProductRouter);
   app.use("/order",OrderRouter);
   app.listen(process.env.PORT,()=>{
    console.log("Server Started At http://localhost:3000");
   });
}).catch(err=>{
    console.log(err);
})