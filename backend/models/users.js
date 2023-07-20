import mongoose from "mongoose";


const Userschema=new mongoose.Schema({
    username:{type:String,min:3,max:20,require:true},
    email:{type:String,max:50,require:true,unique:true},
    password:{type:String,min:6,require:true},
    profilePicture:{
        type:String,
        default:""
    },
    coverPicture:{
        type:String,
        default:""
},

followersCount:{
    type:Number,
    default:0
    
},
followIngCount:{
    type:Number,
    default:0
},
FollowersListID:[],
FollowIngListID:[],

POSTsID:[],

isAdmin:{
    type:Boolean,
    default:false
}

},{timestamps:true})


const Users=mongoose.model(Userschema,'User')
export default Users