import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const Banner = () => {
    const data = useStaticQuery(graphql`
      
  query {
    night: file(relativePath: { eq: "night.png"}){
        childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
        }
    }
  }
`)
    return (
        <div className='banner'>
            <div className='container'>
                <div className='row'>
                    <div className='main-text'>Ariana Hwang</div>
                    <div className='main-image'>
                        <Img fluid={data.night.childImageSharp.fluid} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner