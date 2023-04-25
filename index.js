import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { userRouter } from "./router/users.js";
import { examRouter } from "./router/exam.js";
import { resultRouter } from "./router/result.js";
import { adminRouter } from "./router/admin.js";
import { questionRouter } from "./router/question.js";
import { subjectRouter } from "./router/subject.js";

const app=express();

app.use(express.json());
app.use(cors());
app.get('/', function (req, res) {
    res.send('Api is working!');
 })
app.use("/auth",userRouter);
app.use("/exam",examRouter);
app.use("/result",resultRouter);
app.use("/admin",adminRouter);
app.use("/question",questionRouter);
app.use("/subject",subjectRouter);

mongoose.connect("mongodb+srv://dtanwer:1234@cluster0.nicacv5.mongodb.net/examSystem?retryWrites=true&w=majority");

app.listen(3002,()=>console.log("Server Started!"))