import React, { useState } from 'react'
import {FaStar} from "react-icons/fa"
import { Stars } from './Home/Home'
export const Rating = ({rate,id}) => {
  let Stars=[]
  const [arrst,setarrst]=useState([{id:1,"rating":4},{id:3,"rating":3},{id:4,"rating":5}])
    const handleclikc=(id,ind)=>{
  let exist= arrst.find((x)=>x.id===Number(id))
  console.log(exist,id)
         if (exist) {
            
             setarrst([...arrst.map((x,index)=>x.id===Number(id)?{id:Number(id),rating:ind}:x)])
            
         }
        
        }
        
    
  return (
    <div>
        {
           arrst.map((g,index)=>(            
<div key={index}>
{
      [...Array(5)].map((x,index)=>(
        <label key={index}>
            <input style={{display:"none"}} type='radio' name='rate' onChange={(e)=>handleclikc(e.target.value,index+1)} value={g.id}></input>
            <FaStar color={index+1<=g.rating?"green":"#e4e5e9"} />
        </label>

      ))
}
</div>
             
           ))
        }

    </div>
  )
}
