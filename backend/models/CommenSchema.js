import mongoose from "mongoose";


const Comments=new mongoose.Schema({
 
    postid:{type:mongoose.Schema.Types.ObjectId,ref:"Posts",required:true},
    userId:{type:mongoose.Schema.Types.ObjectId,ref:"User",required:true},
    message:{type:String,required:true},
    children:{type:Array,required:true},
    parentid:{type:mongoose.Schema.Types.ObjectId,ref:"Comments"}

},{timestamps:true})

const CommentMod=mongoose.model('Comments',Comments)
export default CommentMod