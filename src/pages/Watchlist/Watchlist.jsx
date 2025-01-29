import React from 'react'
import './Watchlist.css'
import MovieCard from '../../components/Shared/MovieCard/MovieCard'

const Watchlist = ({watchlistData}) => {
  

  const isEmpty = watchlistData === null

  return (
    <div className='watchlist-container'>
        <div className='watchlist'>
          {isEmpty? 
            <div className='watchlist-empty'>
              <p>Your Watchlist is empty</p>  
            </div>
        :
          <div className='watchlist-movie-cards'>
            {
              watchlistData?.map((item, index)=>(
                <MovieCard
                key={index}
                movieImg={item.image}
                title={item.title}
                id={item.id}
                rating={item.rate}
            />   
              ))
            }
            </div>
          }
            
        </div>
    </div>
  )
}

export default Watchlist