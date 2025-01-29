import React from 'react'
import './Movie.css'
import MovieImg from '../../components/MovieImg/MovieImg'
import MovieDetails from '../../components/MovieDetails/MovieDetails'

const Movie = () => {
  return (
    <div className='movie-container'>
        <div className='movie'>
            <MovieImg />
            <MovieDetails />
        </div>
    </div>
  )
}

export default Movie