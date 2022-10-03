import React, { useEffect } from 'react'
import './Portfolio.css'
import Header from './header/Header'
import Hero from './hero/Hero'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Portfoliopage from '../pages/Portfoliopage'
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom'

function Portfolio() {
    useEffect(()=>{
        <Hero/>
    },[])
    return (
        <div className='main-wrapper'>
            <div className="wrapper">
                <Router>
                    <Header />
                    <Routes>
                        <Route exact path='/ACVPortfolio' element={
                            <Hero />} />
                        <Route path='/about' element={
                            <About />} />
                        <Route path='/contact' element={
                            <Contact />} />
                        <Route path='/portfoliopage' element={
                            <Portfoliopage />} />
                    </Routes>
                </Router>
            </div>

        </div>
    )
}

export default Portfolio
