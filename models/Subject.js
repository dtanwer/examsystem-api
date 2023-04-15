import mongoose from "mongoose";
const SubjectSchma= new mongoose.Schema({
    subject:{type:String, required:true},
    examId:
    [{ type:mongoose.Schema.Types.ObjectId,
        ref:"exam",
        required:true}]
}); 

export const SubjectModel=mongoose.model("subject",SubjectSchma);