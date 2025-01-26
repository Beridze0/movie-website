import React from 'react'
import './MainContent.css'
import FeaturedMovie from './FeaturedMovie/FeaturedMovie'
import ContinueWatching from './ContinueWatching/ContinueWatching'

const MainContent = () => {
  return (
    <div className='main-content-container'>
        <FeaturedMovie />
        <ContinueWatching />
    </div>
  )
}

export default MainContent