import express  from "express"
import jwt from 'jsonwebtoken'
import { QuestionModel } from "../models/Questions.js";

const router=express.Router()
router.post("/add", async (req,res)=>{
    console.log(req.body);
    const question= new QuestionModel(req.body);

    try {
        const response=await question.save();
        res.json(response); 
    } catch (err) {
        res.json(err);
    }
});
router.put("/:quesId", async (req,res)=>{
    
    try {
        const question= await QuestionModel.findByIdAndUpdate(req.params.quesId ,{$set: req.body });
        res.json(question); 
    } catch (err) {
        res.json(err);
    }
});
router.get("/", async (req,res)=>{
    
    try {
        const question= await QuestionModel.find();
        res.json(question); 
    } catch (err) {
        res.json(err);
    }
});
router.get("/:examId", async (req,res)=>{
    
    try {
        const question= await QuestionModel.find({examId:req.params.examId});
        res.json(question); 
    } catch (err) {
        res.json(err);
    }
});

router.delete("/delete/:quesId", async (req,res)=>{

    try {
        const question= await QuestionModel.findByIdAndDelete(req.params.quesId);
        res.json("Exam has been deleted");
         
    } catch (err) {
        res.json(err);
    }
});

export {router as questionRouter}; 



















// export const verifyToken=(req,res,next)=>{
//       const token= req.headers.authorization;
//       if(token)
//       {
//             jwt.verify(token,"secret",(err)=>{
//                   if(err) return res.sendStatus(403);
//                   next();
//             });
//       }
//       else{
//             res.sendStatus(401);
//       }
// }