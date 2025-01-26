import React, { useEffect, useState } from 'react'
import "./Navbar.css"
import { RiSearch2Line } from "react-icons/ri";
import { GiSettingsKnobs } from "react-icons/gi";

const Navbar = () => {


  return (
    <div className='navbar-container'>
      <div className='navbar'>
          <div className='navbar-search'>
              <RiSearch2Line className='search-icon' size={18} />
              <input type="text" placeholder='Search' className='navbar-search-input' />
              <GiSettingsKnobs className='settings-knobs' size={19} />
          </div>
      </div>
    </div>
  )
}

export default Navbar