import React from 'react'
import './MovieCard.css'
import image from '../../../assets/1.jpeg'
import { MdStarRate } from "react-icons/md";

const MovieCard = () => {
  return (
    <div className='movie-card'>
        <div className='movie-card-img-container'>
            <img className='movie-card-img' src={image} alt="" />
        </div>
        <h1>AVATAR</h1>
        <div className='movie-card-rating'>
            <MdStarRate />
            <MdStarRate />
            <MdStarRate />
        </div>
    </div>
  )
}

export default MovieCard