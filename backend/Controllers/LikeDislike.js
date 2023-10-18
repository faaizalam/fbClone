import Posts from "../models/PostSchema.js"
import Like from "../models/extrafea/LikeSchema.js"



export const likningsystem=async(req,res)=>{
   console.log("like dong")
   try {
    const postid=req.body.postid
    const userId=req.body.userid
    const existpost=await Posts.findById(postid)
    if (!existpost) {return res.status(404).send({message:"sorry,post could not found"})}
   //  console.log(existpost);
   //  check if already liked
    const existLike=await Like.findOne({postid:req.body.postid,userId:req.body.userId})
    if (existLike) {
       console.log(existLike,"me");
       const unlike=await Like.findByIdAndDelete(existLike._id)
      //  await existLike.save()
       return res.status(200).send({message:"post disliked sucessfully"})
       
       
      }else{
       console.log(existLike,"me");
       const  Likedone= await new Like(req.body)
        await Likedone.save()
       return res.status(200).send({message:"post has been liked sucessfully"})}
      
   } catch (error) {
    return res.status(500).send({message:"server error",error:error})
    
   }
   
 



}


export const PostLikes=async(req,res)=>{
//    console.log("faaiz",req.params.id)
try {
   let postid= req.params.id
   const response= await Like.find({postid:postid})
   if (response) {
      res.send(response)

   }
   
} catch (error) {
   console.log(error.message)
   
}
// //    console.log(response)
// //   res.send(response)


// const getposts=await Posts.find({}).populate("userId")
//     res.send({getposts})

}

