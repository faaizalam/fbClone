import React from 'react'
import style from "./Nav.module.scss"
import { Chat, NoEncryption, Notifications, Person, Search } from '@material-ui/icons'
import { Avatar } from '@material-ui/core'
// import n from "../../../public/assets/"

export const Nav = () => {
  return (
    <div className={style.TopCont}>
      <div className={style.leftnav}>
        <div style={{marginLeft:"10px"}} className={style.logo}>Iqra media</div></div>
      <div className={style.centernav}>
        <div className={style.searchdiv}><Search/>
        <input placeholder='Search what you like' className={style.serachinput}></input>
        </div>
      </div>
      <div className={style.rightnav}>
        <div className={style.links}>
          <div className={style.link}>Homepage</div>
          {/* <div className={style.link}>Timeline</div> */}

        </div>
        <div className={style.links}>
          {/* <div className={style.link}>Homepage</div> */}
          <div className={style.link}>Timeline</div>

        </div>
        <div className={style.topicons}>
          <div className={style.topbadge}>1</div>
          <Person/>

        </div>
        <div className={style.topicons}>
          <div className={style.topbadge}>2</div>
          <Chat/>

        </div>
        <div className={style.topicons}>
          <div className={style.topbadge}>1</div>
          <Notifications/>

        </div>
          <div className={style.topbarimg}>
        <img src="./assets/profile.jpeg" alt='top image' className={style.topbarprofileimg}></img>

          </div>
      </div>

    </div>
  )
}
