import React from "react"
import Header from '../components/header'
import { CardGroup, Card } from 'react-bootstrap'


function Projects() {
    return (
        <div className='projects-container'>
            <Header />
            <h1 className='title'>Projects</h1>
            <CardGroup>
                <Card>
                    <Card.Img variant='top' src='' />
                    <Card.Body>
                        <Card.Text>
                            Project 1
                            </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant='top' src='' />
                    <Card.Body>
                        <Card.Text>
                            Project 2
                            </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant='top' src='' />
                    <Card.Body>
                        <Card.Text>
                            Project 1
                            </Card.Text>
                    </Card.Body>
                </Card>
            </CardGroup>
        </div>
    )

}

export default Projects;