import React from 'react'
import './Watchlist.css'
import MovieCard from '../../components/Shared/MovieCard/MovieCard'

const Watchlist = () => {
  return (
    <div className='watchlist-container'>
        <div className='watchlist'>
            <div className='watchlist-movie-cards'>
            <MovieCard />   

            </div>
        </div>
    </div>
  )
}

export default Watchlist