import React from "react"
import { Link } from 'gatsby'
// import Scroll from 'react-scroll'
import About from "../pages/about"

const Header = () => (
  <header>
    <div className='container'>
      <div className='inner-header'>
        <div className='logo'>
          <Link to='/'>Ariana Hwang</Link>
        </div>
        <div className='navigation'>
          <nav>
            <Link to='/about'>About Me</Link>
            <Link to='/projects'>Projects</Link>
            <Link to='/contact'>Contact</Link>
          </nav>
        </div>
      </div>
    </div>
  </header>
)

export default Header
