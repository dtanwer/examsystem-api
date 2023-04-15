import express  from "express"
import { SubjectModel } from "../models/Subject.js";

const router=express.Router()

router.post("/add",async (req,res)=>{
    try {
        const newSubject=new SubjectModel(req.body);
        const responce=await newSubject.save()
        return res.json(responce);
        
    } catch (err) {
        return res.json(err);
    } 
});
router.get("/",async (req,res)=>{
    try {
        const subjects=await SubjectModel.find();
        return res.json(subjects);
 
    } catch (err) {
        return res.json(err)
    }
});
router.delete("/delete/:id",async (req,res)=>{
    try {
        const subjects=await SubjectModel.findByIdAndDelete(req.params.id);
        return res.json(subjects);
 
    } catch (err) {
        return res.json(err)
    }
});

export {router as subjectRouter}; 
