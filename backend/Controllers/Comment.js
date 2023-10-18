import CommentMod from "../models/CommenSchema.js"

export const CommentCont=async(req,res)=>{
    try {
        
        const Com= new CommentMod({
            postid:req.body.postid,
            userId:req.body.userId,
            message:req.body.message,
            parentid:req.body.parentid
        
           
        })
        const sucesscomment=await (await Com.save()).populate("userId")
        res.send(sucesscomment)
    } catch (error) {
        res.send({message:error.message})
        
    }
    

}
export const AllCommentget=async(req,res)=>{
    try {
        
      const comments=await CommentMod.find({postid:req.params.id}).populate("userId")
      
        res.send(comments)
    } catch (error) {
        res.send({message:error.message})
        
    }
    

}