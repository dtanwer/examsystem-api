import mongoose from "mongoose";
const ExamSchma= new mongoose.Schema({
    examName:{type:String, required:true},
    examDes:{type:String, required:true},
    examDate:{type:String, required:true},
    examMarks:{type:String, required:true},
    examTotalQuestion:{type:String, required:true},
    examPassingMarks:{type:String, required:true},
    examLevel:{type:String, required:true},
}); 

export const ExamModel=mongoose.model("exam",ExamSchma);