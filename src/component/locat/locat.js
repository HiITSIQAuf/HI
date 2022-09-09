import React from 'react'
import './locat.css';

export default function Locat() {
  return (
    <div className='locat' id='locat'>
      <h1 className='prot'>Location</h1>
      <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d482.61616513359184!2d66.26814084849951!3d39.901723268153155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sru!2s!4v1659518664665!5m2!1sru!2s" width="100%" height="450" border="none" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  )
}
