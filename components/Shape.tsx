import React from 'react'
import './line.css'

const circularShape = (props:any) => {
  const radius = 85;
  const dashArray = radius * Math.PI * 2;
  const dashOffset = dashArray - (dashArray * props.percentage)/100;
  return (
    <div>
      <svg 
      width={props.ciclewidth} 
      height={props.ciclewidth} 
      viewBox={`0 0 ${props.ciclewidth} ${props.ciclewidth}`}
      >
        <circle
          cx={props.ciclewidth /2}
          cy={props.ciclewidth /2}
          strokeWidth={'15px'}
          r={radius}
          className='cycle_background'/>

        <circle
          cx={props.ciclewidth /2}
          cy={props.ciclewidth /2}
          strokeWidth={'15px'}
          r={radius}
          className='cycle_progress'
          style={{
            strokeDasharray:dashArray,
            strokeDashoffset:dashOffset
          }}
          transform={`rotate(-90 ${props.ciclewidth/2} ${props.ciclewidth/2})`}/>

          <text
          x='25%'
          y='50%'
          dy='0.3em'
          className='cycle-text'
          >
            {props.percentage}%
          </text>

      </svg>
    </div>
  )
}

export default circularShape
