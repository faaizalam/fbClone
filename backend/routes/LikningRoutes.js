import express from "express"
import { PostLikes, likningsystem } from "../Controllers/LikeDislike.js"


export const Likesroutes=express.Router()

Likesroutes.post("/post/likningstem",likningsystem)
Likesroutes.get("/postsLikes/:id",PostLikes)