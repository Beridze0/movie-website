import React from 'react'
import './Sidebar.css'
import { GiSpiderBot } from "react-icons/gi";
import { CiCompass1 } from "react-icons/ci";
import { IoHeartOutline } from "react-icons/io5";
import { CiCalendar } from "react-icons/ci";
import { NavLink, useNavigate } from 'react-router-dom';

const Sidebar = () => {

    const navigate = useNavigate()

  return (
    <div className='sidebar-container'>
        <div className='sidebar-logo' onClick={()=>navigate('/')}>
            <GiSpiderBot size={23} />
            <h1>Movie Website</h1>
        </div>
        <div className='sidebar-navigation'>
            <h1>News Feed</h1>
            <NavLink
                to="/"
                className={({ isActive }) => 
                    isActive ? 'sidebar-nav-item active' : 'sidebar-nav-item'
                }
                >
                <CiCompass1 className={({isActive}) => isActive? "active-icon" : ""} size={22} />
                <p>Browse</p>
            </NavLink>
            <NavLink
                to="/watchlist"
                className={({ isActive }) => 
                    isActive ? 'sidebar-nav-item active' : 'sidebar-nav-item'
                }
                >
                <IoHeartOutline size={22} />
                <p>Watchlist</p>
            </NavLink>
            <NavLink
                to="/coming-soon"
                className={({ isActive }) => 
                    isActive ? 'sidebar-nav-item active' : 'sidebar-nav-item'
                }
                >
                <CiCalendar size={22} />
                <p>Coming Soon</p>
            </NavLink>
        </div>
    </div>
  )
}

export default Sidebar