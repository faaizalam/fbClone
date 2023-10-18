import Follow from "../models/FollowSchema.js"
import Posts from "../models/PostSchema.js"
import Users from "../models/users.js"



export const Uploadpost=async(req,res)=>{
    const postcreate=new Posts({
        userId:req.body.userId,
        desc:req.body.desc,
        image:req.file.location,
})
   const savingpost=await postcreate.save()
   res.status(201).send({message:"the post has been created "})

}
export const deletepost=async(req,res)=>{
    const findTodelete=await Posts.findByIdAndDelete(req.params.id)
    res.status(200).send({message:"the post has been deleted"})
   
}
export const update=async(req,res)=>{
   console.log(req.file)
   const updatepost=await Posts.findByIdAndUpdate(req.body.userId,{$set:{image:req.file.location,desc:req.body.desc}})
   res.send({message:"updated sucessfully"})
}


export const getposts=async(req,res)=>{
    const getposts=await Posts.find({}).populate("userId")
    res.send({getposts})

}

export const Timeline=async(req,res)=>{
    const currentuser=await Users.findById(req.params.id)
     const currentposts=await Posts.find({userId:currentuser._id}).populate("userId")
     const followingPost=await Promise.all(
        (await Follow.find({follow:currentuser._id})).map((x)=>{
            console.log(x.following);
           return Posts.find({userId:x.following}).populate("userId")
        })
        
        
        )
        res.send(currentposts.concat(...followingPost))


}