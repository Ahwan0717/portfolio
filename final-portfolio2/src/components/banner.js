import React, { useEffect } from "react"
// import AOS from 'aos';
import 'aos/dist/aos.css';
import Particles from 'react-particles-js';

const Banner = () => {
    let AOS;
    useEffect(() => {
        // if (typeof window === 'undefined' || !window.document) {
        //     AOS.init({
        //         duration: 1200,
        //     });
        // }
        const AOS = require("aos");
        AOS.init({
            once: true,
        });
    }, []);

    useEffect(() => {
        if (AOS) {
            AOS.refresh();
        }
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