

import mongoose from "mongoose";


const Likeschema=new mongoose.Schema({
  postid:{type:mongoose.Schema.Types.ObjectId,ref:"Posts"},
  userId:{type:mongoose.Schema.Types.ObjectId,ref:"User"},

},{timestamps:true})

const Like=mongoose.model('Like',Likeschema)
export default Like