import { LocationCity, PermMedia } from '@material-ui/icons'
import React from 'react'
import { FaTag } from 'react-icons/fa'
import style from '../Compnents/MainFeeds/feed.module.scss'

const Sharebar = () => {
  return (
    <div className={style.Share}>
    <div className={style.ShareTop}>
     <img src='./assets/profile.jpeg' className={style.shareimg} alt='share image'/>
     <input type='text' placeholder='what is in your mind' className={style.shareInput}></input>
    </div>
    <hr />
    <div className={style.ShareBottom}>
      <div className={style.FeedBottomIcons}>
      <input type='file' id='feedimg' style={{ display: "none" }} />
       <label style={{display:"flex",justifyContent:"center",alignItems:"center"}} htmlFor="feedimg">
        <PermMedia style={{ color: "red" }} className='shareicon' />
        <span className={style.shareOption}>Photo or video</span>
        </label>

      </div>
      <div className={style.FeedBottomIcons}>
      <FaTag  style={{color:"blue"}} className='shareicon'/>
      <span className={style.shareOption}>Tag</span>

      </div>
      <div className={style.FeedBottomIcons}>
      <LocationCity style={{color:"green"}} className='shareicon'/>
      <span  className={style.shareOption}>Location</span>

      </div>
      

    </div>

  </div>
  )
}

export default Sharebar