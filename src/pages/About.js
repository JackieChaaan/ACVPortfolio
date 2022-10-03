import React from 'react'
import { Link } from 'react-router-dom'
import './About.css'
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
                <p>I have more than one year of experience as a Data Analyst in MintMelon Business Consulting LLP.</p>

                <button className="more-info"><Link to={resume} target='_blank' download>More Info</Link></button>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6">
              <div className="right-wrapper">
                <img src="https://images.unsplash.com/photo-1624996752380-8ec242e0f85d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8d2ViJTIwZGV2ZWxvcGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="devimg" className='img-fluid'/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
