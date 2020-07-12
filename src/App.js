import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  useHistory
 } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons'
import {
        faGithubAlt,
        faTwitter,
        faLinkedinIn
      } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './styles/App.css';
import './styles/portfolio.css';
import './styles/about.css';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';

library.add(
        faEnvelope,
        faGithubAlt,
        faTwitter,
        faLinkedinIn
      );

function App() {



  let navLinkStyle = {
    padding: '2rem'
  }
  return (
    <Router>
      <div className="App">
        <nav className="nav-bar">
          <div className="logo">
            <h1>Logo</h1>
          </div>
          <ul className="nav-links">
            <li><a href="#hero" className="nav-link" style={navLinkStyle}>Home</a></li>

            <li><a href="#portfolio" className="nav-link" style={navLinkStyle}>Portfolio</a></li>

            <li><a href="#about" className="nav-link" style={navLinkStyle}>About</a></li>

            <li><a href="#footer" className="nav-link" style={navLinkStyle}>Contact</a></li>
          </ul>
        </nav>

        <header className="hero" id="hero">
          <div className="hero-content">
            <h1 className="heading">Hello, I'm Laura.</h1>
            <h2 className="subheading">I am a front end web developer with some back end experience.</h2>
            <div className="hero-btn-group">
              <button className="btn primary-btn">Portfolio</button>
              <button className="btn secondary-btn">Resume</button>
            </div>
          </div>

          <div className="hero-down-arrow" >
            <a href="#portfolio">
              <span className="material-icons">
            expand_more</span>
            </a>
          </div>

        </header>

        <section className="portfolio" id="portfolio">
          <div className="portfolio-content">
            <h2>Projects</h2>
              <a href="#" className="link secondary-link">View Website Source Code</a>


            <div className="project">
              <div className="project-content">
                <h3>Tech used:</h3>
                <ul>
                </ul>
                <a href="#" className="link primary-link">Live Version</a>
                <a href="#" className="link secondary-link">Source Code</a>
              </div>
              <div className="project-img">
                <img src="blankphoto.jpg"/>
              </div>
            </div>

            <div className="project">
              <div className="project-content">
              <h3>Tech used:</h3>
              <ul>
              </ul>
              <a href="#" className="link primary-link">Live Version</a>
              <a href="#" className="link secondary-link">Source Code</a>
              </div>
              <div className="project-img">
                <img src="blankphoto.jpg"/>
              </div>
            </div>
          </div>
        </section>

        <section className="about" id="about">
          <div className="about-content">
            <h2>About</h2>
            <p>I began teaching myself web development in April 2019. I started with the basics, HTML5 & CSS3, in order to create a solid foundation. Then I moved to Javascript and after that, ReactJS.</p>

            <p>After spending hours upon hours practicing, experimenting, google searching, asking questions/finding answers on stackoverflow, and utilizing many other resources, I have finally developed a proficiency in these technologies. Currently I am brushing up on my vanilla Javascript skills. </p>

            <p>Along this journey, I also got to use a few backend technologies, including NodeJS, ExpressJS, and MongoDB/Mongoose.Although these have not been my focus, I do have a good amount of working knowledge of them.</p>


          </div>
        </section>


        <footer className="footer" id="footer">
          <ul className="social-links">
            <li><a href="#" className="tooltip">
              <FontAwesomeIcon icon={faEnvelope} size="lg" className="fa-icon"/>
              <span className="tooltiptext">Click to copy my email address</span>
            </a><p>Insert email address</p></li>
            <li><a href="#" className="tooltip">
              <FontAwesomeIcon icon={faLinkedinIn} size="lg" className="fa-icon"/>
              <span className="tooltiptext">Connect with me on LinkedIn</span>
            </a></li>
            <li><a href="#" className="tooltip">
              <FontAwesomeIcon icon={faTwitter} size="lg" className="fa-icon"/>
              <span className="tooltiptext">Follow me on twitter</span>
            </a></li>
            <li><a href="#" className="tooltip">
              <FontAwesomeIcon icon={faGithubAlt} size="lg" className="fa-icon"/>
              <span className="tooltiptext">View all my source code on Github</span>
            </a></li>
          </ul>
          <p>&copy; Laura Ross 2020</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
