import React from 'react'
import './ContinueWatching.css'
import MovieCard from '../../Shared/MovieCard/MovieCard';

const ContinueWatching = () => {
  return (
    <div className='continue-watching-container'>
        <div className='continue-watching'>
            <h1>Continue Watching</h1>
            <div className='movie-cards'>
              <MovieCard />
              <MovieCard />
              <MovieCard />
              <MovieCard />
            </div>
        </div>
    </div>
  )
}

export default ContinueWatching