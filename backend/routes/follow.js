import express from "express"
import { allfollowers, followsystem, getuserfollower } from "../Controllers/follow.js"



export const followrouter=express.Router()

followrouter.post("/follow/:id",followsystem)
followrouter.get("/allfollowing/:id",allfollowers)

followrouter.get("/usersfollowersandfollowing/:id",getuserfollower)


