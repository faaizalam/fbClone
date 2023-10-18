import { Mytoken } from "../Utils.js"
import Users from "../models/users.js"
import bcrypt from "bcryptjs"
import Jwt from "jsonwebtoken"

export const Register=('/',async(req,res)=>{
   const pass=bcrypt.genSaltSync(10)
   const password=bcrypt.hashSync(req.body.password,pass)

   const verifyEmial=await Users.findOne({email:req.body.email})
   if (verifyEmial) {
    res.status(403).send({message:"user already exits"})
    return
    
   }

    const user= new Users({
        username:req.body.username,
         email:req.body.email,
         password:password,
         profilePicture:req.body.profilePicture,
         coverPicture:req.body.coverPicture,
         DateOfbirth:req.body.DateOfbirth,
         bio:req.body.bio,
         followersCount:req.body.followersCount,
         followIngCount:req.body.followIngCount,
         Isprivit:req.body.Isprivit,
         country:req.body.country,
         city:req.body.city
    })

     
    try {
        const saveuser= await user.save()
        if (saveuser) {
            
           res.status(200).send({message:"you have sucessfully registered",
           username:saveuser.username,
           _id:saveuser._id,
           email:saveuser.email,
           token:Mytoken(saveuser)   
        })
           
       }
        
    } catch (error) {
        res.status(500).send({message:"it was problem while creating account", errmessages:error.message})
        
    }
})


export const Login=('/',async(req,res)=>{

    const login=await Users.findOne({email:req.body.email})
    if (!login) {
         res.status(404).send({message:"email is wrong"})
         return
        }
        
        const verifypass=bcrypt.compareSync(req.body.password,login.password)
        if (!verifypass) {
             res.status(404).send({message:"password is wrong"})
             return
            }
            
            res.status(200).send({message:"you have sucessfully logged in",
        
            user:login,
            token:Mytoken(login) 
        })
    


})









export const updateUser=("/",async(req,res)=>{
    console.log(req.params.id)
    const updateuser=await Users.findById(req.params.id)
    const existemail=await Users.findOne({email:req.body.email})
    if (existemail) {
        return res.send({message:"this email is already taken you cant update with this email"})
        
    }
    


    if (updateuser) {
        console.log("i am")
//  if (updateuser.isAdmin) {

    
//  }


        if (!req.body.token) {
            res.send({message:"token does not exits"})
            return
            
        }
        Jwt.verify(req.body.token,"secret",async(err,data)=>{
            if (err) {
                res.send({message:"token is not valid"})
                return
                
            }
             if (req.body.password) {
                const salt= bcrypt.genSaltSync(10)
                req.body.password=bcrypt.hashSync(req.body.password,salt)
                
             }

            

           const modifying= await Users.findByIdAndUpdate(req.params.id,{$set:req.body})
           if (modifying) {
               res.send({message:"user has been updated sucessfully"})
            
           }







        })
        
        
    }else{
        
        res.send({message:"no found user"})
    }

})


export const Delete=("/",async(req,res)=>{

  const userexist=await Users.findByIdAndDelete(req.params.id)
  console.log(userexist)
  if (userexist) {
    res.send({message:'user has been deleted'})
    return
    
}else{
res.send({message:'you cant delete your account'})
return
  }


})


export const singleuser=("/",async(req,res)=>{
    console.log(req.params.id)
    const user=await Users.findById(req.params.id)
    if (user) {
       return res.send(user)
        
    }else{
        return res.send({message:" sorry! cant find the user"})
    }

})


// delete profile