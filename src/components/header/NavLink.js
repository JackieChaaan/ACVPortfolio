import React from 'react'
import { Link } from 'react-router-dom'
import './NavLink.css'

function NavLink() {
    return (
        <>
            <ul>
                <li><Link to='/ACVPortfolio'>Home</Link></li>
                <li><Link to='/ACVPortfolio/about'>About</Link></li>
                <li><Link to='/ACVPortfolio/portfoliopage'>Portfolio</Link></li>
                <li><Link to='/ACVPortfolio/contact'>Contact</Link> </li>
            </ul>
        </>
    )
}

export default NavLink
