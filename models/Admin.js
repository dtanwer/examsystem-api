import mongoose from "mongoose";
const AdminSchma= new mongoose.Schema({
    username:{type:String, required:true, unique:true},
    password:{type:String, required:true}
}); 

export const AdminModel=mongoose.model("admin",AdminSchma);