import React from 'react'
import './Trending.css'
import MovieCard from '../../Shared/MovieCard/MovieCard';4
import { IoIosTrendingUp } from "react-icons/io";

const Trending = () => {
  return (
    <div className='trending-container'>
        <div className='trending'>
            <div className='trending-title'>
                <h1>Trending</h1>
                <IoIosTrendingUp size={25} />
            </div>
            
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

export default Trending