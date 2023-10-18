import React, { useEffect, useState } from 'react'
import Comment from './Comment';
import style from "./comment.module.scss"
import { baseurl } from './Config';
import { FaSpinner } from 'react-icons/fa';
const Comments = ({postcom,postid,setCommenterror,setcommentlength}) => {
  // setcommentlength((prev)=>prev+1)
  
  


    let [commentInput, setCommentInput] = useState("");
    let [commentsubloading,setcommentsubloading]=useState(false)
    let [commentsuberror,setcommentsuberror]=useState("")
    let [CommReplyLoad,setcomReplyload]=useState(false)
    
    let [comments, setComments] = useState(postcom)
      console.log(postcom,"from com")


     






      function addReply(commentId, replyText) {
        console.log(commentId,"commid")
        let commentsWithNewReply = [...comments];
       t(commentsWithNewReply, commentId, replyText);
        setComments(commentsWithNewReply);
      }
    
      // function newComment(text) {
      //   return {
      //     _id: new Date().getTime(),
      //     message: text,
      //     children: [],
      //     username:new Date().getHours()
      //   };
      // }
    

// reply api
const childcomm=async(parentid,comment,text)=>{
  console.log(parentid,comment)
  let newrepl={
    parentid:parentid,
    message:text,
    postid:postid,
    userId:"64ff047cff4afc827b88e654",

  }
  try {
    setcomReplyload(true)
    const {data}=await baseurl.post("/post/comment",newrepl)
    if (data) {
       
       comment.children.push(data)
       setcomReplyload(false)
      
    }else{
      console.log("else com reply")
      setcomReplyload(false)
    }
    
  } catch (error) {
    setcomReplyload(false)
    console.log(error.message)
    
  }
  

}


function t(comments, parentId, text) {
for (let i = 0; i< comments.length; i++) {
  // console.log(i)
  let com=comments[i]
  console.log(i,com)

  insertComment(com,parentId,text)
  
}
  
}

async function insertComment(comment, parentId, text) {
  // console.log("yaho out found",comment._id,parentId,text)
        if (comment._id ===parentId) {
                      // console.log("yaho found",comment._id,parentId)
            // await newComment(text)
            childcomm(parentId,comment,text)
        }
        if (comment.children.length!==0) {
          // console.log("ran",comment)
          
          for (let i = 0; i < comment.children.length; i++) {
            let comments = comment.children[i];
            insertComment(comments, parentId, text);
          }
        }
      }
      //         for (let i = 0; i < comments.length; i++) {
      //           let comment = comments[i];
      //           if (comment._id === parentId) {
      //             console.log("yaho found",comment._id,parentId)
      //             // await newComment(parentId,comment,text)
      //             comment.children.push(newComment(text));
      //           }
      // }




const AddComment=async()=>{
  setcommentsuberror("")
 
  let newcom={
      message:commentInput,
      userId:"64ff047cff4afc827b88e654",
      postid:postid
    }

    try {
      setcommentsubloading(true)
      const {data}=await baseurl.post("/post/comment",newcom)
      if (data) {
        
        setComments([...comments,data]);
        setCommentInput("");
        setcommentsubloading(false)
        setcommentlength((prev)=>prev+1)
        setCommenterror(" ")
  
        
      }else{
        setcommentsubloading(false)
        setcommentsuberror(data.message)
   
        console.log("else")
      }
      
    } catch (error) {
      setcommentsubloading(false)
      setcommentsuberror(error.message)
      console.log(error.message)
      
    }

  
}









  return (
   <>
     
      <ul>
        {comments.map((comment) => (
          <Comment key={comment.id} comment={comment} addReply={addReply} CommReplyLoad={CommReplyLoad} />
          ))}
      </ul>
        <br />
        <div className={style.commentBox}>
        {commentsubloading&&<FaSpinner/>}
        {commentsuberror&&<div>{commentsuberror}</div>}
              <textarea className={style.textComInt}
              placeholder='Type your comments..'
          
          value={commentInput}
          onChange={(e) => {
            setCommentInput(e.target.value);
          }}
        />
          <br />
     
          <button
          className={style.commbuttons}
          onClick={AddComment}
        >
          Submits
        </button>
    </div>

      
    </>
  )
}

export default Comments