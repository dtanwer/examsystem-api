import express  from "express"
import jwt from 'jsonwebtoken'
import { UserModel } from "../models/Users.js"

const router=express.Router()

router.post("/register",async (req,res)=>{
    const {username,password,userEmail}=req.body;
    const user= await UserModel.findOne({username});

    if(user)
    {
          return res.json({message:"User Already exist"});
    }
    const newUser=new UserModel({username,password,userEmail});
    await newUser.save()
     .then(item => {
          res.json({message:"User Register Successfully!"});
     })
     .catch(err => {
     res.status(400).send({message:"Unable to register!"});
     });
  

});
router.post("/login",async (req,res)=>{
     const {username,password}=req.body;
     const user= await UserModel.findOne({username});
     if(!user)
    {
          return res.json({message:"User Not found"});
    }
    if(password!=user.password)
    {
          return res.json({message:"User password is Incorrect!"});
    }

    const token =jwt.sign({id:user._id},"secret");
    res.json({token,userID:user._id});
 
});


router.get("/",async (req,res)=>{
      const users= await UserModel.find();
      if(users)
     {
           return res.json(users);
     }
     return res.json({message:"No user found"});
  
 });
 router.get("/:userId",async (req,res)=>{
      const user= await UserModel.findById(req.params.userId);
      if(user)
     {
           return res.json(user);
     }
     return res.json({message:"No user found"});
  
 });
 

export {router as userRouter}; 



















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