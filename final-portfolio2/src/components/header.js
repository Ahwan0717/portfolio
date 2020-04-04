import React from "react"
import { Link } from "react-scroll";
// import About from "../pages/about"
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
            <Link activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Ariana Hwang
                </Link>
          </div>
          <div className='navigation'>
            <div data-aos="zoom-in">
              <nav>
                <Link activeClass="active"
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Projects
                </Link>

                <Link activeClass="active"
                  to="experience"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Experience
                </Link>

                <Link activeClass="active"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  About
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
