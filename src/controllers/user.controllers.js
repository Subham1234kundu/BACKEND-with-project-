import {asyncHandeler } from "../utils/asyncHandeler.js"

const registerUSer = asyncHandeler(async(req,res)=>{
   res.status(200).json({
        message:"ok"
    })
});

 export {registerUSer};