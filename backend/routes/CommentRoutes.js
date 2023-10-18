import express from "express"
import { AllCommentget, CommentCont } from "../Controllers/Comment.js"

export const CommentRout=express.Router()




CommentRout.post("/post/comment",CommentCont)
CommentRout.get("/post/Allcommentget/:id",AllCommentget)