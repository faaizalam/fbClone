import React, { useEffect, useState } from 'react'
import style from "./Profile.module.scss"
import Image from 'next/image'
import { Add, CardMembership, People } from '@material-ui/icons'
import { Badge, Button } from '@material-ui/core'
import { FaIdBadge } from 'react-icons/fa'
import { baseurl } from '../Config'

const Profile = () => {
  const [followerscount,setFollowerscount]=useState(0)
  const [followingscount,setFollowingcount]=useState(0)

useEffect(()=>{
  
  const follo=async()=>{
    try {
    const {data}=await baseurl.get("/usersfollowersandfollowing/64fefb8fffb3747b8cad67a2")
    if (Array.isArray(Object.keys(data))) {
      console.log(data,"hh")
      setFollowerscount(data.followers.length)
      setFollowingcount(data.following.length)
      
    }
  
  
  } catch (error) {
  console.log(error.message)
  
}
}
  
  follo()



},[])





const Followcomponents=()=>{
  return(
    <div className={style.Followcomponents}>
    <Button className={style.foll} variant="contained">Followers {" "}
    <Badge badgeContent={followerscount} color="secondary">
    <People/>
    </Badge>
    </Button>
    <Button className={style.foll} variant="contained">Following
    {" "}
    <Badge badgeContent={followingscount} color="secondary">
      <People/>
    </Badge>
    </Button>
     
      {/* <Badge>Following</Badge> */}
    </div>
  )
}





  return (
    <div className={style.ProfileCOnt}>
   <div className={style.coverPhoto}>
   <Image
        src={"https://alamfirsttime.s3.ap-southeast-2.amazonaws.com/1694433033865r1.JPG"}
        alt="post image"
        width={500}
        height={300}
       
        loading="lazy"
        className={style.coverimg}
      />
   </div>
   <div className={style.Profile}>
    <div className={style.bio}>
      <div className={style.TimelineProfile}>

    <Image
        src={"/assets/p.png"}
        alt="post image"
        width={300}
        height={100}
        
       
        loading="lazy"
        className={style.prifle}
      />
      <Add className={style.addpic}/>
      </div>
    <div className={style.userbioinfo}>
      <span>Date Of birth:2/10/1999</span>
      <span>school:iqra university</span>

    </div>
    
    
        
    <Followcomponents/>
        
    </div>

   </div>
    <div>
       
    </div>


    </div>
  )
}

export default Profile