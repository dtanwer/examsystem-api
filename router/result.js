import express from "express"
import { ResultModel } from "../models/Reslult.js";
import { UserModel } from "../models/Users.js";
const router = express.Router()

router.post("/", async (req, res) => {

    const result = new ResultModel(req.body);
    try {
        const response = await result.save();
        try {
            const user=await UserModel.findById(response.userId);
            user.resultId.push(response._id);
            const response2 = await user.save();
            res.json({ res1: response, res2: response2 });

        } 
        catch (err) {
            res.json(err);
        }
    }
    catch (err) {
        res.json(err);
    }

});

router.get("/:userId", async (req, res) => {

    try {
        const result = await ResultModel.find({userId:req.params.userId});
        res.json(result);
    }
    catch (err) {
        res.json(err);
    }

});
router.get("/", async (req, res) => {

    try {
        const result = await ResultModel.find();
        res.json(result);
    }
    catch (err) {
        res.json(err);
    }

});


export { router as resultRouter }; 