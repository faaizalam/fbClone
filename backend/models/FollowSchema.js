import mongoose from "mongoose";


const follow=new mongoose.Schema({
 follow:{type:mongoose.Schema.Types.ObjectId,ref:"User"},
 following:{type:mongoose.Schema.Types.ObjectId,ref:"User"}

},{timestamps:true})

const Follow=mongoose.model('Follows',follow)
export default Follow