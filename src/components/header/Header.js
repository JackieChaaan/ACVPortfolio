import React, { useState } from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import MobileNavLink from './MobileNavLinks'
import NavLink from './NavLink'

function Header() {

  const [mobnav, setMobNav] = useState(false);
  
  const navCloseHandler = ()=>{
    setMobNav(false);
  }

  return (
    <div className='header-wrapper'>
      { mobnav ? <MobileNavLink navCloseHandler={navCloseHandler}/> : "" }
      <div className="container">
        <div className="header">
          <div className="logo-section">
            <h1><Link to='/'>A C V</Link></h1>
          </div>
          <div className="nav-link-section">
            <NavLink />
          </div>
          <span className='hamburger h1' onClick={()=>{setMobNav(true)}}><i className="bi bi-list"></i></span>
        </div>
      </div>
    </div>
  )
}

export default Header
