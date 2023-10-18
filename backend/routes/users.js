import express  from "express";
import Users from "../models/users.js";


export const userRouter=express.Router()

userRouter.post("/my/post",async(req,res)=>{
    const  saves= new Users({
        username:"faaiz",
        email:"@gmma.com",
        password:12122
    })
   const t= await saves.save()
    console.log(t,"kk")

})