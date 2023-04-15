import express from "express"
import { SubjectModel } from "../models/Subject.js";
import { ExamModel } from "../models/Exam.js";

const router = express.Router()

router.get('/',async (req,res)=>{
    try {
        const exams=await ExamModel.find();
        res.json(exams);    
    } catch (err) {
        res.json(err);
    }
})
router.get('/:examId',async (req,res)=>{
    try {
        const exams=await ExamModel.findById(req.params.examId);
        res.json(exams);    
    } catch (err) {
        res.json(err);
    }
})

router.post("/add", async (req, res) => {

    const exam = new ExamModel(req.body);
    try {
        const response = await exam.save();
        const sub = await SubjectModel.findOne({ subject: response.examName });
        if (!sub) {
            try {
                const subject = new SubjectModel({ subject: response.examName, examId: [response] });
                const response2 = await subject.save();
                res.json({ res1: response, res2: response2 });
            } catch (err) {
                res.json(err);
            }
        }
        else {
            try {
                
                sub.examId.push(response._id);
                const response2 = await sub.save();
                console.log(response2);
                res.json({ res1: response, res2: response2 });
            } catch (err) {
                res.json(err);
            }
        }

    }
    catch (err) {
        res.json(err);
    }

});

router.delete("/delete/:examId", async (req,res)=>{
    const exam= await ExamModel.findByIdAndDelete(req.params.examId);
    try {
        const subject=exam.examSubject;
        await SubjectModel.findOneAndUpdate(subject, { $pull: {examId:req.params.examId}},)
        res.json("Exam has been deleted"); 
    } catch (err) {
        res.json(err);
    }
});


export { router as examRouter }; 