import React from 'react'
import style from "../LeftSidebar/L.module.scss"
import { Myfun } from '../Icons/icon';
import { Avatar } from '@material-ui/core';
const RSidebar = () => {
  const sidelinks=[
    {name:"Chat",icon:"Chat"},
    {name:"People",icon:"People"},
    {name:"Settings",icon:"Settings"},
    {name:"Block",icon:"Block"},
    {name:"Group",icon:"Group"},
    {name:"Pages",icon:"Pages"},
    {name:"Event",icon:"Event"},
  
  ]
  return (
    <div className={style.LbarContainer}>
  
     <ul className={style.LeftbarListCont}>
      {
        sidelinks.map((x)=>(
          <li className={style.leftitems}>
           <span>{Myfun(x.icon)}</span> 
           <span>{x.name}</span> 
            
          </li>
        ))
      }
      
 
     </ul>
     <hr/>
     <ul className={style.LonlineUser}>

       <li className={style.leftitemsuser}>
        <span>
        <Avatar src='./assets/profile.jpeg'/>

        </span>
        </li>
        <li className={style.leftitemsuser}>
        <span>
        <Avatar src='./assets/profile.jpeg'/>

        </span>
        </li>
        
          
       <li className={style.leftitemsuser}>
        <span>
        <Avatar src='./assets/profile.jpeg'/>

        </span>
        
       

       </li>

     </ul>
      </div>
  )
}

export default RSidebar