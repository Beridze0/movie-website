import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home/Home'
import Movie from './pages/Movie/Movie'
import Watchlist from './pages/Watchlist/Watchlist'


const App = () => {

  const [darkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem("dark-mode") || false))
  const [watchlistItems, setWatchlistItems] = useState(JSON.parse(localStorage.getItem('watchlist')) || [])



  const getData = (img, title, rate, id) => {

    const existedMovie = watchlistItems.some(item => item.id === id)

    if (existedMovie) {
      alert('This movie is already added to the watchlist!')
      return;
    }

    setWatchlistItems(prev => {
      const updatedItems = [...prev, { image: img, title, rate, id }]
      localStorage.setItem('watchlist', JSON.stringify(updatedItems))
      return updatedItems
    });
  }
  

    const watchlistData = JSON.parse(localStorage.getItem("watchlist"))
    


    const toggleDarkMode = () =>{
        setDarkMode(prev => {
            const newTheme = !prev
            document.querySelector('body').setAttribute('data-theme', newTheme? "dark" : "light")
            localStorage.setItem("dark-mode",JSON.stringify(newTheme))
            return newTheme
        })
    }

    useEffect(()=>{
        const currentTheme = JSON.parse(localStorage.getItem('dark-mode'))
        document.querySelector('body').setAttribute('data-theme', currentTheme? "dark" : "light")
    },[])


  const location = useLocation()
  const smallSidebar = location.pathname != "/movie"

  return (
    <div className='app'>
       <Sidebar toggleDarkMode={toggleDarkMode} darkMode={darkMode} smallSidebar={smallSidebar} />
      <div className='main-content'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/movie/:id' element={<Movie getData={getData} />} />
          <Route path='/watchlist' element={<Watchlist watchlistData={watchlistData} />} />
        </Routes>
      </div>
    </div>
  )
}

export default App