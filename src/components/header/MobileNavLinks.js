import React from 'react'
import { Link } from 'react-router-dom'
import './MobileNavLinks.css'

function MobileNavLink({navCloseHandler}) {
  return (
    <div className='mobileNav'>
       <span className='close h1' onClick={navCloseHandler}><i class="bi bi-x-circle"></i></span>
      <ul>
        <li><Link to='/ACVPortfolio/' onClick={navCloseHandler}>Home</Link></li>
        <li><Link to='/ACVPortfolio/about' onClick={navCloseHandler}>About</Link></li>
        <li><Link to='/ACVPortfolio/portfoliopage' onClick={navCloseHandler}>Portfolio</Link></li>
        <li><Link to='/ACVPortfolio/contact' onClick={navCloseHandler}>Contact</Link> </li>
      </ul>
    </div>
  )
}

export default MobileNavLink
