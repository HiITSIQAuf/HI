import React from 'react'
import { NewHistory } from '../newHistory/newhistory'
import Portfolio from '../portfolia/portfolio'
// import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Locat from '../locat/locat'
import './section.css';


export const Section = () => {
  // window.addEventListener('Portfolio', ()=>{
  //   let content = document.querySelector('.portfolio');
  //   let contentPosition = content.getBoundingClientRect().top;
  //   let screenPosition = window.innerHeight / 1.7;
  //   if( contentPosition < screenPosition){
  //     content.classList.add('active');
  //   }else{
  //     content.classList.remove('active');
  //   }
  // })
  return (
    <div className='section'>
      <NewHistory />
      <Portfolio />
      <Locat />
    </div>
  )
}
