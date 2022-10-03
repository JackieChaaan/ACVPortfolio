import React from 'react'
import { Link } from 'react-router-dom'
import './MobileNavLinks.css'

function MobileNavLink({navCloseHandler}) {
  return (
    <div className='mobileNav'>
       <span className='close h1' onClick={navCloseHandler}><i class="bi bi-x-circle"></i></span>
      <ul>
        <li><Link to='/ACVPortfolio'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/portfoliopage'>Portfolio</Link></li>
        <li><Link to='/contact'>Contact</Link> </li>
      </ul>
    </div>
  )
}

export default MobileNavLink