import React from 'react'
import Small from '../small/small'
import './content.css'
// import StarfieldAnimation from 'react-starfield-animation';

export default function Content() {
  return (
    <div className='content'>
      <Small />
      <div className='contentline'>
       
        <span className='span'>
        <div className="left">
            <div className="one"></div>
            <div className="two"></div>
        </div>
        <div className="right">
            <div className="one"></div>
            <div className="two"></div>
        </div>
    </span>
    
      </div>
    </div>
  )
}
