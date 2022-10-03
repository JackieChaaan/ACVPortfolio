import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { ExternalLink } from 'react-external-link'
import './Projectcard.css'

function Projectcard({ projectdtls }) {
    return (
        <div className='cardprojects'>
            <Card style={{ width: '26rem' }}>
                <div className="card-image">
                    <Card.Img variant="top" src={projectdtls.projectimg} />
                </div>
                <Card.Body>
                    <Card.Title as ='h3'>{projectdtls.projectName}</Card.Title>
                    <Card.Title as="h5">{projectdtls.tags}</Card.Title>
                    <Card.Text>
                        {projectdtls.projectDescription}
                    </Card.Text>
                    <Button ><ExternalLink href={projectdtls.link}>CHECK NOW</ExternalLink></Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Projectcard
