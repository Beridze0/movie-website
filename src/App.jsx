import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home/Home'
import Movie from './pages/Movie/Movie'


const App = () => {

  const [darkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem("dark-mode") || false))

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
          <Route path='/movie' element={<Movie />} />
        </Routes>
      </div>
    </div>
  )
}

export default App