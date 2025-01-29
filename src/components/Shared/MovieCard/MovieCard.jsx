import React from 'react'
import './MovieCard.css'
import { MdStarRate } from "react-icons/md";
import { Link } from 'react-router-dom';
const MovieCard = ({movieImg,id,title,rating}) => {

  const ratingStars = Math.floor(rating)
  

  return (
    <Link to={`/movie/${id}`} className='movie-card'>
        <div className='movie-card-img-container'>
            <img className='movie-card-img' src={`https://image.tmdb.org/t/p/w500` + movieImg} alt="Movie img" />
        </div>
        <h1>{title}</h1>
        <div className='movie-card-rating'>
          <p>{rating.toFixed(1)}</p>
            {
              [...Array(ratingStars)].map((_, i)=> (
                <MdStarRate key={i} />
              ))
            }
        </div>
    </Link>
  )
}

export default MovieCard