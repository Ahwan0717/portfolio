import React from "react"
import { Link } from 'gatsby'
import About from "../pages/about"
import AOS from 'aos';
import 'aos/dist/aos.css';

const Header = () => {

  AOS.init({
    duration: 1200,
  });
  return (
    <header>
      <div className='container'>
        <div className='inner-header'>
          <div className='logo'>
            <Link to='/'>Ariana Hwang</Link>
          </div>
          <div className='navigation'>
            <div data-aos="zoom-in">
              <nav>
                <Link to='/about'>About Me</Link>
                <Link to='/projects'>Projects</Link>
                <Link to='/experience'>Experience</Link>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
