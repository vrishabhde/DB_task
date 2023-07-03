import express from "express";
import morgan from "morgan";
import mongoose from "mongoose";
import router from "./routes/user_routes.js";
import dotenv from "dotenv";


const app = express();
dotenv.config();

app.use(morgan('dev'));
app.use(express.json());
app.use("/api/v1", router);

app.get("/ping", (req,res)=>{
    return res.send("pong");
})

mongoose.connect(process.env.MONGODB_URL)   
.then(() => console.log("DB connected"))
.catch((err) => console.log("DB error=>", err))

app.listen(process.env.PORT, ()=> console.log("working on port 6003"));
