import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Banner = () => {
    //     const data = useStaticQuery(graphql`

    //   query {
    //     night: file(relativePath: { eq: "night.png"}){
    //         childImageSharp {
    //             fluid(maxWidth: 300) {
    //               ...GatsbyImageSharpFluid
    //             }
    //         }
    //     }
    //   }
    // `)
    AOS.init({
        duration: 1200,
    });

    return (
        <div className='banner'>
            <div className='container'>
                <div data-aos="fade-right">
                    <div className='row'>
                        <div className='main-text'>Ariana Hwang</div>
                    </div>
                    <div className='main-image'>
                        {/* <Img fluid={data.night.childImageSharp.fluid} /> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner