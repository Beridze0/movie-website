import React from 'react'
import './MovieImg.css'
import image from '../../assets/1.jpeg'


const MovieImg = () => {
  return (
    <div className='movie-img-container'>
        <img className='movie-img' src={image} alt="" />
    </div>
  )
}

export default MovieImg