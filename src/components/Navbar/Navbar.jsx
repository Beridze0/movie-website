import React, { useEffect, useState } from 'react'
import "./Navbar.css"
import { RiSearch2Line } from "react-icons/ri";
import { GiSettingsKnobs } from "react-icons/gi";
import { GiPlagueDoctorProfile } from "react-icons/gi";
import { IoMoonOutline } from "react-icons/io5";
import { PiSun } from "react-icons/pi";

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

        <div className='navbar-profile'>
            <button className='mode-btn' onClick={toggleDarkMode}>
                {darkMode ? <PiSun size={20} className='mode-icon' /> 
                :
                <IoMoonOutline size={20} className='mode-icon' />}
            </button>
            <GiPlagueDoctorProfile className='profile-icon' size={20} />
        </div>
    </div>
  )
}

export default Navbar