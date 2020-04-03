import React from "react"
import Header from '../components/header'
import me from '../images/me.png'
import linkedin from '../images/linkedinlogo.png'
import github from '../images/githublogo.png'
import mail from '../images/mail.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Interests from '../components/interests'
import resume from '../images/resume.pdf'

function About() {

    AOS.init({
        duration: 1200,
    });

    return (
        <div id="about">
            <div className="about-container">
                <div className="item" data-aos="zoom-in">
                    <div className='image-container'>
                        <img className='ariana-pic' src={me} alt="Ariana Hwang" />
                    </div>
                </div>
                <div data-aos="fade-right">
                    <div className='bio'>
                        <p> Hi, I’m Ariana. Before I began my journey into software engineering, I was working in a sales and marketing position for a food startup shortly after graduating from Baruch College with a Bachelor’s degree in Digital Marketing. I have also held several marketing internships and jobs in the music industry. </p>
                        <p>I wanted to shift careers because I realized I wanted to make a positive impact on people’s lives by building out applications rather than selling them. After creating my own music and culture blog and taking a web design course in college, I knew I wanted to fuse my passion for tech, business, and music. </p>
                        <p>Because I understand digital marketing principles and can put myself in the shoes of a user, I think I could contribute a lot to a software engineering team creatively and analytically from a digital marketing perspective. I am looking to work as a front-end or fullstack software engineer in a collaborative environment, helping a company’s vision come to life.</p>
                        <h3>Front-End</h3>
                        <p>JavaScript, ReactJS, Redux, Ionic, HTML, CSS, Sass, Material-UI</p>
                        <h3>Back-End</h3>
                        <p>NodeJS, Express, PostgreSQL</p>
                        <div className='contact'>
                            <a href='https://www.linkedin.com/in/ariana-hwang-892a59ba' target="_blank" >
                                <img className='linkedin' src={linkedin} alt="linkedin" />
                            </a>
                            <a href='https://github.com/Ahwan0717' target="_blank" >
                                <img className='github' src={github} alt="github" />
                            </a>
                            <a href="mailto:ajhwang0717@gmail.com" target="_blank" rel="noopener noreferrer">
                                <img className='mail' src={mail} alt="email" />
                            </a>
                            <button className="button">
                                <a href={resume} download>
                                    Download Resume
                                </a>
                            </button>
                        </div>
                        <h3 className="interests-title">Interests</h3>
                        <Interests />
                    </div>
                </div>
            </div>
            {/* <Interests /> */}
        </div>

    )

}

export default About;