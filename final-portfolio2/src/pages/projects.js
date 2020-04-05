import React, { useEffect } from "react"
import Header from '../components/header'
import { Card } from 'react-bootstrap'
import harmonious from '../images/harmonious.png'
import abiliteas from '../images/abiliteas.png'
import videogamelibrary from '../images/videogamelibrary.png'
import coronatracker from '../images/coronatracker.png'
import AOS from 'aos';
import 'aos/dist/aos.css';


function Projects() {
    useEffect(() => {
        if (typeof window === 'undefined' || !window.document) {
            return;
        }
    }, []);
    AOS.init({
        duration: 1200,
    });

    return (
        <div id='projects'>
            <Header />
            <h1 className='title'>Projects</h1>
            <div className='projects-container'>
                <div className="item" data-aos="fade-up">
                    <Card className='card'>
                        <Card.Img className='card-img' variant='top' src={harmonious} />
                        <Card.Body>
                            <Card.Title>Harmonious</Card.Title>
                            <Card.Text>
                                A progressive web app that streamlines the booking process between an artist and a booker.
                        </Card.Text>
                            <Card.Link href="https://harmonious-capstone.herokuapp.com/" target="_blank">Visit</Card.Link>
                            <Card.Link href="https://github.com/campstone-lead/Capstone" target="_blank">Github</Card.Link>
                        </Card.Body>
                    </Card>
                </div>
                <div className="item" data-aos="fade-up">
                    <Card className='card'>
                        <Card.Img className='card-img' variant='top' src={abiliteas} />
                        <Card.Body>
                            <Card.Title>Abiliteas</Card.Title>
                            <Card.Text>
                                An e-commerce web application that allows guests and logged-in users to purchase teas that provide superpowers.
                        </Card.Text>
                            <Card.Link href="https://graceshopperlamchops.herokuapp.com/" target="_blank">Visit</Card.Link>
                            <Card.Link href="https://github.com/GraceShopper-LAMbchops/GraceShopper" target="_blank">Github</Card.Link>
                        </Card.Body>
                    </Card>
                </div>
                <div className="item" data-aos="fade-up">
                    <Card className='card'>
                        <Card.Img className='card-img' variant='top' src={videogamelibrary} />
                        <Card.Body>
                            <Card.Title>Video Game Music Library</Card.Title>
                            <Card.Text>
                                A single-page application created in 5 days featuring a library of video game artists' top tracks using the Spotify API.
                            </Card.Text>
                            <Card.Link href="http://videogame-library.herokuapp.com/" target="_blank">Visit</Card.Link>
                            <Card.Link href="https://github.com/Ahwan0717/stackathon_project" target="_blank">Github</Card.Link>
                        </Card.Body>
                    </Card>
                </div>
                <div className="item" data-aos="fade-up">
                    <Card className='card'>
                        <Card.Img className='card-img' variant='top' src={coronatracker} />
                        <Card.Body>
                            <Card.Title>CoronaTracker</Card.Title>
                            <Card.Text>
                                An open source project called CoronaTracker that is focused on educating the public on COVID-19. I joined a global team of developers and created the map component using react hooks and was the first developer to implement declarative routing with react router. Placed 20th place in CodeVsCovid19 hackathon.
                            </Card.Text>
                            <Card.Link href="http://coronatrackerv1.s3-website-us-east-1.amazonaws.com/" target="_blank">Visit</Card.Link>
                            <Card.Link href="https://github.com/COVID-19-electronic-health-system/Corona-tracker" target="_blank">Github</Card.Link>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    )

}

export default Projects;