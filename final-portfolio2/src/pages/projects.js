import React from "react"
import Header from '../components/header'
import { CardDeck, Card } from 'react-bootstrap'
import harmonious from '../images/harmonious.png'
import abiliteas from '../images/abiliteas.png'
import videogamelibrary from '../images/videogamelibrary.png'


function Projects() {
    return (
        <div>
            <Header />
            <h1 className='title'>Projects</h1>
            {/* <CardDeck className='card-deck'> */}
            <div className='projects-container'>
                <Card style={{ width: '18rem' }}>
                    <Card.Img className='card-img' variant='top' src={harmonious} />
                    <Card.Body>
                        <Card.Title>Harmonious</Card.Title>
                        <Card.Text>
                            A progressive web app that streamlines the booking process between an artist and a booker.
                        </Card.Text>
                        <Card.Link href="#">Visit</Card.Link>
                        <Card.Link href="#">Github</Card.Link>
                    </Card.Body>
                </Card>
                <Card className='card'>
                    <Card.Img className='card-img' variant='top' src={abiliteas} />
                    <Card.Body>
                        <Card.Title>Abiliteas</Card.Title>
                        <Card.Text>
                            An e-commerce web application that allows guests and logged-in users to purchase teas that provide superpowers.
                        </Card.Text>
                        <Card.Link href="#">Visit</Card.Link>
                        <Card.Link href="#">Github</Card.Link>
                    </Card.Body>
                </Card>
                <Card className='card'>
                    <Card.Img className='card-img' variant='top' src={videogamelibrary} />
                    <Card.Body>
                        <Card.Title>Video Game Music Library</Card.Title>
                        <Card.Text>
                            A single-page application created in 5 days featuring a library of video game artists' top tracks using the Spotify API.
                            </Card.Text>
                        <Card.Link href="#">Visit</Card.Link>
                        <Card.Link href="#">Github</Card.Link>
                    </Card.Body>
                </Card>
                {/* </CardDeck> */}
            </div>
        </div>
    )

}

export default Projects;