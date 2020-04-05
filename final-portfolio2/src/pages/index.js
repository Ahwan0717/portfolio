import React from "react"
import '../styles/styles.scss'
import Header from '../components/header'
import Banner from '../components/banner'
import About from './about'
import Projects from './projects'
import Experience from './experience'

const IndexPage = () => {

  return (
    <div id="home">
      <Header />
      <Banner />
      <div>
        <Projects />
      </div>
      <Experience />
      <div>
        <About />
      </div>
    </div>

  )
}

export default IndexPage
