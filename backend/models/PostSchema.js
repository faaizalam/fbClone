import mongoose from "mongoose";


const PostsSchma=new mongoose.Schema({
userId:{type:mongoose.Schema.Types.ObjectId,ref:"User",required:true},
desc:{type:String,max:500,required:function(){
    !this.image

}},
image:{type:String,required:function(){
    !this.desc

}},

likes:[{type:mongoose.Schema.Types.ObjectId,ref:"Like"}],



},{timestamps:true})

const Posts=mongoose.model('Posts',PostsSchma)
export default Posts