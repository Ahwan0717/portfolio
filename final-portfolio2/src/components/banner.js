import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Particles from 'react-particles-js';

const Banner = () => {

    AOS.init({
        duration: 1200,
    });

    return (
        <div className='banner'>
            <div className='row'>
                <div data-aos="fade-right">
                    <div className='main-text'>Ariana Hwang</div>
                </div>
            </div>
            <div className='container'>
                <Particles
                    params={{
                        particles: {
                            number: {
                                value: 200,
                                density: {
                                    density_auto: true,
                                    enable: true,
                                    value_area: 1000,
                                }
                            },
                        },
                    }}
                />
            </div>
        </div>
    )
}

export default Banner