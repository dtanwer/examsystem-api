import mongoose from "mongoose";
const UserSchma= new mongoose.Schema({
    username:{type:String, required:true, unique:true},
    password:{type:String, required:true},
    userEmail:{type:String, required:true},
    resultId:
    [{ type:mongoose.Schema.Types.ObjectId,
        ref:"result"}]
}); 

export const UserModel=mongoose.model("users",UserSchma);