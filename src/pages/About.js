import React from 'react'
import { Link } from 'react-router-dom'
import './About.css'
import about from '../assets/about.jpg'
import resume from '../assets/Abelcv Resume.pdf';

function About() {
  return (
    <div className='about_me'>
      <div className="container">
        <div className="head">
          <h2>About Me</h2>
        </div>
        <div className="about-content">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-6">
              <div className="left-wrapper">
                <p>Hello, My name is Abel C Varghese. I have a serious passion for creating React js based websites .</p>
                <p>Well-organised person, Hardworking, goal-oriented, Adaptive, Sincere and Supportive.Able to work independently and With the team </p>
                <p>Interested in the entire frontend technologies.</p>
                <p>I am a professional MCA student with over one year of experience as a data analyst..</p>

                <button className="more-info"><Link to={resume} target='_blank' download>More Info</Link></button>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6">
              <div className="right-wrapper">
                <img src={about} alt="devimg" className='img-fluid'/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
