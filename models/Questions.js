import mongoose from "mongoose";
const QuestionSchma= new mongoose.Schema({
    questionName:{type:String, required:true},
    op1:{type:String, required:true},
    op2:{type:String, required:true},
    op3:{type:String, required:true},
    op4:{type:String, required:true},
    answer:{type:String, required:true},
    subjectName:{type:String},
    examId:
    { type:mongoose.Schema.Types.ObjectId,
        ref:"exam",
        required:true}
});
export const QuestionModel=mongoose.model("question",QuestionSchma);