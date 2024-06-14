'use client'
import React, { useState } from 'react'
import Shape from './Shape'


const CircularProgressBar = () => {

    const [percentage,setpercentage]= useState(35)

  return (
    <div>
        <Shape percentage={percentage} ciclewidth='200'/>
      <input 
      type="range"
       min='1' 
       max='100' 
       step='1' 
       value={percentage} 
       name="" id="" 
       onChange={(ev:any)=>setpercentage(ev.target.value)}/>
    </div>
  )
}

export default CircularProgressBar
