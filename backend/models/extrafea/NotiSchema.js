import mongoose from "mongoose";


const notifications=new mongoose.Schema({
    message:{type:String,require:true},
    isRead:{type:Boolean,default:false},
    sender:{typeof:mongoose.Schema.Types.ObjectId,require:true,ref:'user'},
    reciver:{typeof:mongoose.Schema.Types.ObjectId,require:true,ref:'User'},
    TypeOfnoti:{
        type:String,
        enum:['like','comment','followingreq','followaccpt']
    }
},{timestamps:true})

const Noti=mongoose.model('Noti',notifications)
export default Noti