import express from "express"




import multer from 'multer'
import  multerS3 from 'multer-s3'
import {S3} from "@aws-sdk/client-s3"
import { Timeline, Uploadpost, deletepost, getposts, update } from "../Controllers/createpost.js"


export const PostsRouter=express.Router()



// Configure AWS with your credentials

const s3=new S3({
    region: "ap-southeast-2",
    credentials: {
      accessKeyId: "AKIASDGX5CUFQUIKTU4C",
      secretAccessKey: "sbUZqLfHPNYDQrPE66SglHkYXP352J93gM+RRPan",
    },
});


const size=1*1024*1024;
const filterfile=((err,file,cb)=>{
  const filtype=["image/jpeg","image/png"]
  if (!filtype.includes(file.mimetype)) {
    const error=new Error("only jpg and png file are allowd")
    error.code="LIMIT_FILE_TYPES"
    return cb(error,false)
    
  }
  
  if (file.size>size) {
    const error=new Error("your image size is too big only in 1 mb file is allows")
    error.code="LIMIT_FILE_SIZE"
    return cb(error,false)
    
  }
  cb(null,true)
})



const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: 'alamfirsttime',
   
    contentType: multerS3.AUTO_CONTENT_TYPE,
    key: function (req, file, cb) {
      cb(null, Date.now().toString()+file.originalname); // Use a unique key for each file (e.g., timestamp)
    },
  }),
  fileFilter:filterfile
});













PostsRouter.post("/post/create",upload.single("image"),Uploadpost)

PostsRouter.put("/post/update",upload.single("image"),update)
PostsRouter.delete("/post/:id",deletepost)
PostsRouter.get("/post/all/:id",Timeline)