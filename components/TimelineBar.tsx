'use client'
import React, { useState } from 'react'
import './line.css'
const TimelineBar = () => {

    const items=["Contact Us ", 
    "Documents verification",
    'Application payment',
    'visa process',
    'registration complete']
    var u=0;

    const [currentItem,setcurrentItem]= useState(1)
    const [complete,setcomplete]=useState(false)
  return (
    <div>
      {items?.map((item,i)=>(
        <div key={i} className={`flex flex-col`}>
            <div className={`flex items-center relative`}>
                <div className={`line`}>{i+1}</div>
                <div className=''>{item}</div>
            </div>
        </div>
      ))}
    </div>
  )
}

export default TimelineBar
