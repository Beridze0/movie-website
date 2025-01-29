import React from 'react'
import './Watchlist.css'
import MovieCard from '../../components/Shared/MovieCard/MovieCard'

const Watchlist = ({watchlistData}) => {
  
  console.log(watchlistData)

  const isEmpty = Object.keys(watchlistData).length === 0;

  return (
    <div className='watchlist-container'>
        <div className='watchlist'>
          {isEmpty? 
            <div className='watchlist-empty'>
              <p>Your Watchlist is empty</p>  
            </div>
        :
          <div className='watchlist-movie-cards'>
              <MovieCard
                    movieImg={watchlistData.image}
                    title={watchlistData.title}
                    id={watchlistData.id}
                    rating={watchlistData.rate}
                />   
            </div>
          }
            
        </div>
    </div>
  )
}

export default Watchlist