import React from 'react'

import {projectsdata} from './projects'
import Projectcard from './Projectcard';
import './Portfoliopage.css'

function Portfoliopage() {
 const data = projectsdata;


  const projects = data.map((item)=>{
    return <Projectcard key={item.projectID} projectdtls = {item}/>
  })
  
  return (
    <div className='portfoliopage'>
      <div className="container">
        <div className="project-head">
          <h2>My Projects</h2>
        </div>
        <div className="projects-details">
          {projects}
        </div>
      </div>
    </div>
  )
}

export default Portfoliopage
