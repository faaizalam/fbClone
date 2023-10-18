import React, { useEffect, useRef, useState } from 'react'
import style from "./post.module.scss"
import moment from 'moment';
import { Error, More, MoreHorizTwoTone } from '@material-ui/icons';
import { FaHeart, FaOptinMonster, FaSpinner } from 'react-icons/fa';
import Image from 'next/image';
import { baseurl } from '../Config';
import Comments from '../Comments';


import { Grouped } from '../Grouping';
import axios from 'axios';
import Link from 'next/link';


// const source = CancelToken.source();
let tv={}

export const Posts = ({key,post}) => {
  const [imageLoaded, setImageLoaded] = useState(false)
  const [iscommentOpen,SetcommentOpne]=useState(false)
  const [isLike,SetLIke]=useState(false)
  const [postLikes,setpostLikes]=useState([])
  const [postlikecount,setpostlikecount]=useState()
  const [postComments,setPostcomments]=useState([])
  let [commentLoading,setCommenload]=useState(false)
  let [commentlength,setcommentlength]=useState(0)
  let [commenterror,setCommenterror]=useState("")
  // let [tv,settv]=useState("")

  let myref=useRef()
  
  
 
useEffect(()=>{
  let observer=new IntersectionObserver((entries,obser)=>{
    entries.forEach((x)=>{
      console.log(x);
      if (x.isIntersecting) {
       
        setImageLoaded(true)
        
      }
    })

  },{threshold: 0.5,})

  if (myref?.current) {
    observer.observe(myref.current)

    
  }
  return(()=>{
    observer.disconnect()

  })



})





 // Declare cl as a global variable

const commentget = async (id) => {
  setCommenload(true);
  // SetcommentOpne(!iscommentOpen);

  if (iscommentOpen) {
    console.log(tv, "jj");
    tv.cancel("cancelling");
    return;
  } else {
  try {
      let cancel=await axios.CancelToken.source()
       tv=cancel
        const {data}=await axios.get(`http://localhost:4000/post/Allcommentget/${id}`,{cancelToken:cancel.token})

          if (data.length>0) {
          let comm=  Grouped(data)
           setPostcomments(comm)
            console.log(comm,"com",data)
            setCommenload(false)
              
          }else{
            if (data.length===0) {
              setCommenterror("no comments found")
            }
            setCommenload(false)
  
          }
     
   }catch (error) {
       setCommenload(false)
       if (axios.isCancel(error)) {
         // Handle request cancellation here
         console.log('Request canceled', error.message);
         
       } else {
         // Handle other errors
         console.error('Request error', error);
       }
      
         
       
     
  }
   
  }
  // Now cl will have the updated value when you run the function again
}




 
// console.log(token)








// for like event
useEffect(() => {
  // console.log("like page")
  const postLike=async()=>{
     
    try {
      const {data}=await baseurl.get(`/postsLikes/${post._id}`)
      if (data) {
        
          setpostLikes(data)
          setpostlikecount(data.length)
          SetLIke(data.some((x)=>x.userId==="64fefb8fffb3747b8cad67a2"))

      }
      
    } catch (error) {
      console.log(error.message)
      
    }


    

  }
  postLike()

 
}, [post._id])





useEffect(() => {
  // console.log("like page")
  // const canceltok=axios.CancelToken.source()
  const commentLenght=async()=>{

     try {
      const {data}=await baseurl.get(`/post/Allcommentget/${post._id}`)
      if (data) {
      let lgth=  Grouped(data)
        setcommentlength(lgth.length)
        }      
    } catch (error) {
    console.log(error.message)
    // if (axios.isCancel(error)) {
    //   // Handle request cancellation here
    //   console.log('Request canceled from all com length', error.message);
    // } else {
    //   // Handle other errors
    //   console.error('Request error', error);
    // }
      
    }


    

  }
  commentLenght()
  // return ()=>{
  //  canceltok.cancel("you req cancel of all com")
  // }

 
}, [post._id])



const likefunction=async()=>{
  try {
   let likedata= await baseurl.post("/post/likningstem",{postid:post._id,userId:"64fefb8fffb3747b8cad67a2"})
   
  } catch (error) {
    console.log(error.message)
    
  }
if (isLike) {
    setpostlikecount(()=>{
      return postlikecount-1
    })
    SetLIke((x)=>!x)
}else{
    setpostlikecount(()=>{
      return postlikecount+1
    })
    SetLIke((x)=>!x)
}
  }






  return (
    <div className={style.postCont}>
        <header className={style.postheader}>
          <div className={style.postheaderLeft}>
            <Link href={`/Timeline/${12332}`}>
            <img src={post.profile||"./assets/profile.jpeg"} alt='profile image'></img>
            </Link>
            <span style={{marginLeft:"5px"}}>{post.userId?.username}</span>
            <span style={{marginLeft:"5px"}}>{moment(post.createdAt).fromNow()}</span>
          </div>
          <div className={style.postheaderRight}>
            <span><MoreHorizTwoTone/></span>
          </div>
        </header>
        <main className={style.postmain}>
          <div className={style.postmainDesc}>
            {post.desc}

          </div>
          {/* <div className={style.postmainImage}>
           
            <Image className={style.postimg} src={post.postimage} alt='post image'
            width={500}
            height={300}
            loading="lazy"
            />

          </div> */}
           <div className={style.postmainImage}>
      {!imageLoaded ?(
        <div
          className={style.placeholder}
        >
          <img  ref={myref} 
          id={post._id}
            src="/assets/images.png"
            alt="Loading..."

            className={style.postimg}
            
          />
        </div>
      ):(
      <Image
        src={post.image}
        alt="post image"
        width={500}
        height={300}
        onLoad={() => setImageLoaded(true)}
        loading="lazy"
        className={style.postimg}
      />
      )
}
    </div>
          
        </main>
        <footer className={style.postfooter}>
       <div className={style.postfooterfirst}>
          <div onClick={likefunction} className={style.likes}>
            <FaHeart  className={isLike?style.likeexist:style.likeisnot} />
           <span>{postlikecount}</span> 
          </div>
          <div className={style.comments} onClick={()=>{
             SetcommentOpne((prev)=>{
              return !prev
             })
              commentget(post._id)
          }}>
            
            Comments <span>{commentlength}</span>
           <span>{post.commments}</span> 
          </div>

       </div>
       
          <div className={iscommentOpen?style.comdailoug:style.comdailougNone}>
            
              {commenterror&&(<div style={{marginLeft:"10px"}}>{commenterror}</div>)}
            {
              commentLoading?(<div><FaSpinner/></div>):(<Comments postcom={postComments} postid={post._id}  setCommenterror={setCommenterror} setcommentlength={setcommentlength} />)
            }
            
          </div>
        </footer>

    </div>
  )
}
