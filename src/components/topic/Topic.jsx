import React from 'react'
import './topic.css'

function Topic ({ image, title, link }) {
  return (
    <div className='augmented__topic-container'>
        <img src={image} alt='topic_image' onClick={() => window.open(`${link}`, '_blank')}/>
        <p>{title}</p>
    </div>
  )
}

export default Topic