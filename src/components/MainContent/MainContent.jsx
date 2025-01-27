import React from 'react'
import './MainContent.css'
import FeaturedMovie from './FeaturedMovie/FeaturedMovie'
import Trending from './Trending/Trending'

const MainContent = () => {
  return (
    <div className='main-content-container'>
        <FeaturedMovie />
        <Trending />
    </div>
  )
}

export default MainContent