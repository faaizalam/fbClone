import mongoose from "mongoose";


const following=new mongoose.Schema({
following:{type:mongoose.Schema.Types.ObjectId,ref:"User"},
userid:{type:mongoose.Schema.Types.ObjectId,ref:"User"}

},{timestamps:true})

const Following=mongoose.model('Following',following)
export default Following