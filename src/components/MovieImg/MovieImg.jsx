import React from 'react'
import './MovieImg.css'


const MovieImg = ({image}) => {
  return (
    <div className='movie-img-container'>
        <img className='movie-img' src={`https://image.tmdb.org/t/p/w500` + image} alt="" />
    </div>
  )
}

export default MovieImg