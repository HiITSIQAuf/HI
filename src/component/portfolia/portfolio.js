/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import Gallary from '../../images/using.png'
import Galaxy from '../../images/of.png'
import Gall from '../../images/website.png'
import Or from '../../images/or.png'
import './portfolio.css'


export default function Portfolio() {
  const styles = {
    transition: '1s',
  }

  return (
    <div className='portfolio' id='portfolia' style={styles}>
      <h1 className='prot'>Portfolio</h1>
      <div className='container'>
        <div className='gallary-port'>
          <img src={Gallary} />
        </div>
        <div className='gallary-us'>
          <img src={Galaxy} />
        </div><br />
        <div>
          <img className='gallary-su' src={Gall} />
        </div>
        <div>
          <img className='gallary-or' src={Or} />
        </div>
      </div>
    </div>
    
  )
}
