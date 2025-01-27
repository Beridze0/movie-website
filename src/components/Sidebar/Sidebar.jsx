import React, { useEffect, useState } from 'react'
import './Sidebar.css'
import { GiSpiderBot } from "react-icons/gi";
import { CiCompass1 } from "react-icons/ci";
import { IoHeartOutline } from "react-icons/io5";
import { CiCalendar } from "react-icons/ci";
import { GiPlagueDoctorProfile } from "react-icons/gi";
import { IoMoonOutline } from "react-icons/io5";
import { PiSun } from "react-icons/pi";
import { NavLink, useNavigate } from 'react-router-dom';

const Sidebar = ({toggleDarkMode, darkMode, smallSidebar}) => {

    const navigate = useNavigate()
   
  return (
    <div className='sidebar-container'>
        <div className='sidebar'>
        <div className='sidebar-logo' onClick={()=>navigate('/')}>
            <GiSpiderBot size={23} className='logo-icon' />
            {smallSidebar &&  <h1>Movie Website</h1>}
        </div>
        <div className='sidebar-navigation'>
            <div className='news-feed'>
            {smallSidebar &&  <h1>News Feed</h1>}
                <NavLink
                    to="/"
                    className={({ isActive }) => 
                        isActive ? 'sidebar-nav-item active' : 'sidebar-nav-item'
                    }
                    >
                    <CiCompass1 className={({isActive}) => isActive? "active-icon" : ""} size={22} />
                        {smallSidebar && <p>Browse</p>}
                </NavLink>
                <NavLink
                    to="/watchlist"
                    className={({ isActive }) => 
                        isActive ? 'sidebar-nav-item active' : 'sidebar-nav-item'
                    }
                    >
                    <IoHeartOutline size={22} />
                    {smallSidebar && <p>Watchlist</p>}
                </NavLink>
                <NavLink
                    to="/coming-soon"
                    className={({ isActive }) => 
                        isActive ? 'sidebar-nav-item active' : 'sidebar-nav-item'
                    }
                    >
                    <CiCalendar size={22} />
                    {smallSidebar && <p>Coming Soon</p>}
                </NavLink>
            </div>
            <div className='sidebar-profile'>
                <button className='theme-btn' onClick={toggleDarkMode}>
                {darkMode ? (
                        <>
                        <PiSun size={19} /> {smallSidebar && <p>Appearance: Dark</p>}
                        </>
                            ) : (
                        <>
                        <IoMoonOutline size={19} /> {smallSidebar && <p>Appearance: Light</p>}
                        </>
                    )}
                </button>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Sidebar