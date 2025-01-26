import React from 'react'
import './FeaturedMovie.css'
import WatchBtn from '../../Shared/WatchBtn/WatchBtn'

const FeaturedMovie = () => {
  return (
    <div className='featured-movie-container'>
      <div className='featured-movie-title'>
        <h1>THE SOUL CONDUCTOR</h1>
        <p>2022 | Adventure</p>
        <WatchBtn />
      </div>
      <div className='featured-movie-img'>

      </div>
    </div>
  )
}

export default FeaturedMovie