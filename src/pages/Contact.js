import React from 'react'
import { ExternalLink } from 'react-external-link'
import './Contact.css'

function Contact() {
  return (
    <div className='contact'>
      <div className="container">
      <div className="contact-wrapper">
        <div className="contact-head">
          <h1>Get In Touch</h1>
        </div>
        <div className="contact-body">
          <p>If you are intrested in my portfolio, please hire me.My inbox is always open.Whether you have a question or just want to say hi, I’ll try my best to get back to you!</p>
        </div>
        <div className="contact-mail">
          <button><ExternalLink href="mailto:abelcvarghese12097@gmail.com?Subject=Hello Abel, I'd Love to Connect!">Say Hello !</ExternalLink></button>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Contact
