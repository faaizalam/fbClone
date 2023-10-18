import React, { useEffect, useState } from 'react'
import style from './feed.module.scss'
import { LocationCity, PermMedia } from '@material-ui/icons'
import { FaTag } from 'react-icons/fa'
import Sharebar from '../Sharebar'
import { Posts } from '../POsts/Posts'
import { baseurl } from '../Config'

// let postarr=[
//   {
//   profile:"./assets/profile.jpeg",
//   postimage:"/assets/nsg_594x332.jpg",
//   name:"faaiz",
//   timenow:"Thu Sep 07 2023 17:24:44 GMT+0500",
//   like:5,
//   commments:9,
//   description:"hello guys how are youhello guys how are youhello guys how are youhello guys how are youhello guys how are youhello guys how are youhello guys how are youhello guys how are youhello guys how are youhello guys how are youhello guys how are youhello guys how are youhello guys how are youhello guys how are youhello guys how are youhello guys how are youhello guys how are youhello guys how are youhello guys how are youhello guys how are youhello guys how are youhello guys how are youhello guys how are youhello guys how are youhello guys how are youhello guys how are youhello guys how are youhello guys how are youhello guys how are you",
//   id:1
// },
//   {
//   profile:"./assets/profile.jpeg",
//   postimage:"/assets/nsg_594x332.jpg",
//   name:"faaiz",
//   timenow:"Thu Sep 07 2023 17:24:44 GMT+0500",
//   like:5,
//   commments:9,
//   description:"hello guys how are you",
//   id:2
// },
//   {
//   profile:"./assets/profile.jpeg",
//   postimage:"/assets/nsg_594x332.jpg",
//   name:"faaiz",
//   timenow:"",
//   like:5,
//   commments:9,
//   description:"hello guys how are you",
//   id:3
// },
// ]

export const Feed = () => {
  const [postarr,setpostarr]=useState([])

  useEffect(()=>{
    console.log("hh")
    const postdata=async()=>{
      
     
      try {
        const {data}=await baseurl.get("/post/all/64fefb8fffb3747b8cad67a2")
        if (Array.isArray(data)) {
              let sortdata=data.sort((a,b)=>{
               return    new Date(b.createdAt) - new Date(a.createdAt)

              })
              // console.log(t,"sort")
            setpostarr(sortdata)

        }
        
      } catch (error) {
        console.log(error.message)
        
      }


      

    }
    postdata()

  },[])














  return (
    <div className={style.feedCont}>
      <Sharebar/>


      
      {
        postarr.length===0?(<div className={style.Nopoststyle}>NO POST AVAILABLE</div>):

        (postarr.map((post,index)=>(
          

          <Posts key={post._id} post={post}/>
          ))
        )
        }
       
     
      
      
    </div>
  )
}
