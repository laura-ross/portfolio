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
import './styles/resume.css';
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

            <li><a href="#resume" className="nav-link" style={navLinkStyle}>Resume</a></li>

            <li><a href="#about" className="nav-link" style={navLinkStyle}>About</a></li>

            <li><a href="#footer" className="nav-link" style={navLinkStyle}>Contact</a></li>
          </ul>
        </nav>

        <header className="hero" id="hero">
          <div className="hero-content">
            <h1 className="heading">Hello, I'm Laura.</h1>
            <h2 className="subheading">I am a front end developer with some back end experience.</h2>

          </div>

          <div className="hero-down-arrow" >
            <a href="#portfolio">
              <span className="material-icons">
            expand_more</span>
            </a>
          </div>

        </header>

        <section className="portfolio" id="portfolio">
          <div className="portfolio-content section-global-styles">
            <h2>Portfolio</h2>
              <a href="https://github.com/laura-ross/portfolio.git" className="link secondary-link">View Website Source Code</a>


            <div className="project">
              <div className="project-img-container">
                <img src="tasktimer.png" className="project-img"/>
              </div>
              <div className="project-content">
                <h3>Description: </h3>
                <p>A browser based timer that allowes you to time a project you are working on and store it in a task history via local storage.</p>
                <h3>Tech used:</h3>
                <ul>
                  <li>ReactJS - useContext, useEffect</li>
                  <li>HTML5/CSS3</li>
                </ul>
                <a href="https://festive-fermi-e130cc.netlify.app/" className="link primary-link">Live Version</a>
                <a href="https://github.com/laura-ross/task-timer.git" className="link secondary-link">Source Code</a>
              </div>
            </div>

            <div className="project">
              <div className="project-img-container">
                <img src="recipeapp.jpg" className="project-img"/>
              </div>
              <div className="project-content">
                <h3>Description: </h3>
                <p>A browser based recipe app where users can add, remove, and edit recipes. Also uses local storage. See the full version <a href="#">here</a>.</p>
                <h3>Tech used:</h3>
                <ul>
                <li>ReactJS - class based components</li>
                <li>HTML5/CSS3</li>
                </ul>
                <a href="https://eager-galileo-41baa2.netlify.app/" className="link primary-link">Live Version</a>
                <a href="https://github.com/laura-ross/All-My-Recipes---Recipes-Component-Only.git" className="link secondary-link">Source Code</a>
              </div>
            </div>

            <div className="project">
              <div className="project-img-container">
                <img src="oldpioneerstore.jpg" className="project-img"/>
              </div>
              <div className="project-content">
                <h3>Description: </h3>
                <p>A revamp of one of my favorite small businesses. NOTE: The routing is functional but the shopping cart portion is not. I simply wanted to see if I could reimagine a current design using current branding/colors/content. See the original website <a href="http://www.theoldpioneerstore.com/">here</a>.</p>
                <h3>Tech used:</h3>
                <ul>
                <li>ReactJS - React Router</li>
                <li>HTML5/CSS3 - CSS Grid</li>
                </ul>
                <a href="https://elated-bohr-13f7cb.netlify.app/" className="link primary-link">Live Version</a>
                <a href="https://github.com/laura-ross/Local_Business_Redesign.git" className="link secondary-link">Source Code</a>
              </div>
            </div>
          </div>
        </section>

        <section className="resume" id="resume">
          <div className="resume-content section-global-styles">
          <h2>Resume</h2>
          </div>
        </section>

        <section className="about" id="about">
          <div className="about-content section-global-styles">
            <h2>About</h2>
            <p>I began teaching myself web development in April 2019. I started with the basics, HTML5 & CSS3, in order to create a solid foundation. Then I moved to Javascript and after that, ReactJS.</p>

            <p>After spending hours upon hours practicing, experimenting, google searching, and utilizing many other resources, I have finally developed a proficiency in these technologies. Currently I am brushing up on my vanilla Javascript skills. </p>

            <p>Along this journey, I also got to use a few backend technologies, including NodeJS, ExpressJS, and MongoDB/Mongoose. Although these have not been my focus, I do have a good amount of working knowledge of them.</p>


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
