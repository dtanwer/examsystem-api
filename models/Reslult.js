import mongoose from "mongoose";
const ResultSchma= new mongoose.Schema({
    resultStatus:{type:String, required:true},
    resultScore:{type:String, required:true},
    userName:{type:String, required:true},
    userEmail:{type:String, required:true},
    examName:{type:String, required:true},
    examDate:{type:String, required:true},
    userId:
    { type:mongoose.Schema.Types.ObjectId,
        ref:"users",
        required:true},
    examId:
    { type:mongoose.Schema.Types.ObjectId,
        ref:"exam",
        required:true}
    
}); 

export const ResultModel=mongoose.model("result",ResultSchma);