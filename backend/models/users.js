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
DateOfbirth: { type: Date ,required:function(){
      return !this.bio
}},
city:{
    type:String,required:true
},
country:{
    type:String,required:true
},
age:{
   type:String
},
relationship:{
   type:Number,
   enum:[1,2,3]
},

bio:{type:String,max:160,required:function(){
   return !this.DateOfbirth
}},
followersCount:{
    type:Number,
    default:0
    
},
followIngCount:{
    type:Number,
    default:0
},

follow:[{
    type:mongoose.Schema.Types.ObjectId,ref:"Follows"
}],
following:[{
    type:mongoose.Schema.Types.ObjectId,ref:"Following"
}],

POSTsID:[   {
    type:mongoose.Schema.Types.ObjectId,
    ref:'Posts'
}],

isAdmin:{
    type:Boolean,
    default:false
},
Isprivit:{
    type:Boolean,
    default:false

},
notifications:[
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:'Notification'
    }
]

},{timestamps:true})


const Users=mongoose.model('User',Userschema)
export default Users