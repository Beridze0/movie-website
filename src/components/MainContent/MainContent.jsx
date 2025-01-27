import React from 'react'
import './MainContent.css'
import FeaturedMovie from './FeaturedMovie/FeaturedMovie'
import ContinueWatching from './ContinueWatching/ContinueWatching'
import Trending from './Trending/Trending'

const MainContent = () => {
  return (
    <div className='main-content-container'>
        <FeaturedMovie />
        <ContinueWatching />
        <Trending />
    </div>
  )
}

export default MainContent