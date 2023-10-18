import Users from "../models/users.js"
import bcrypt from "bcryptjs"
import Jwt from "jsonwebtoken"
import Follow from "../models/FollowSchema.js"
import Following from "../models/followingSchema.js"



export const followsystem=async(req,res)=>{
    console.log("hit")
   
    if (req.params.id!==req.body.userid) {
        const Followuser=await Users.findById(req.params.id)
        const FollowingCurrentuser=await Users.findById({_id:req.body.follow})
        const user=await Follow.findOne({following:req.params.id,follow:req.body.follow})
    
        if (user) {
            Followuser.followersCount=Followuser.followersCount-1
            FollowingCurrentuser.followIngCount= FollowingCurrentuser.followIngCount-1
            
            const result = await Follow.deleteOne({following:req.params.id,follow:req.body.follow});
            await Followuser.save()
        await FollowingCurrentuser.save()
            
            res.send({message:"been unfollowd"})
            
            
        }else{
            const newfollow=new Follow({
                following:req.params.id, 
                follow:req.body.follow
            })
            Followuser.followIngCount++
            FollowingCurrentuser.followersCount++
            // const newfollowing=new Following({
            //     following:req.params.id, 
            //     userid:req.body.userid
            // })
             const savingfollow=await newfollow.save() 
            //  const savingfollowing=await newfollowing.save() 
            await Followuser.save()
        await FollowingCurrentuser.save()
             res.send({message:"user has been followd"})
            
            

        }

        
        
        
}else{
    res.status(403).send({message:"you cant follow to yourself"})
}
  

}


export const allfollowers=async(req,res)=>{
    const following=await Follow.find({following:req.params.id})
    const follow=await Follow.find({follow:req.params.id})
    const list=await Promise.all([{followings:following,follow:follow}])
    res.send(list)

}



export const getuserfollower=async(req,res)=>{
    const following=await Follow.find({following:req.params.id})
    const followers=await Follow.find({follow:req.params.id})
    res.send({followers:followers,following:following})
}