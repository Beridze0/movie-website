import React, { useEffect, useState } from 'react'
import "./Navbar.css"
import { RiSearch2Line } from "react-icons/ri";
import { GiSettingsKnobs } from "react-icons/gi";

const Navbar = () => {

    const [darkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem('dark-mode')) || false)

    const toggleDarkMode = () =>{
        setDarkMode(prev => {
            const newTheme = !prev
            document.querySelector('body').setAttribute('data-theme', newTheme? "dark" : "light")
            localStorage.setItem('dark-mode', JSON.stringify(newTheme))
            return newTheme
        }
        )
    }

    useEffect(()=>{
        const currentTheme = JSON.parse(localStorage.getItem('dark-mode'))
        document.querySelector('body').setAttribute('data-theme', currentTheme? "dark" : "light")
    },[])

  return (
    <div className='navbar-container'>
        <div className='navbar-search'>
            <RiSearch2Line className='search-icon' size={18} />
            <input type="text" placeholder='Search' className='navbar-search-input' />
            <GiSettingsKnobs className='settings-knobs' size={19} />
        </div>
    </div>
  )
}

export default Navbar