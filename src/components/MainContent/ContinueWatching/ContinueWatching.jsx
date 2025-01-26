import React from 'react'
import './ContinueWatching.css'
import image from '../../../assets/1.jpeg'
import { MdStarRate } from "react-icons/md";
import MovieCard from '../../Shared/MovieCard/MovieCard';

const ContinueWatching = () => {
  return (
    <div className='continue-watching-container'>
        <div className='continue-watching'>
            <h1>Continue Watching</h1>
            <MovieCard />
        </div>
    </div>
  )
}

export default ContinueWatching