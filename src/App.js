import React, { useState } from 'react';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import {
        faGithubAlt,
        faTwitter,
        faLinkedinIn
      } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
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
        faLinkedinIn,
        faBars,
        faTimes

      );



let desktopNavStyle = "desktop-nav-links";
let mobileNavStyle = "mobile-nav-links hide";



function App() {
  const [ navMenuOpen, setNavMenuOpen ] = useState(false);

  const navMenuToggle = () => {
    setNavMenuOpen(!navMenuOpen);
  }

  const closeNavMenu = () => {
    setNavMenuOpen(false);
  }

  if(navMenuOpen === true) {
    mobileNavStyle = "mobile-nav-links"
  }

  if(navMenuOpen === false) {
    mobileNavStyle = "mobile-nav-links hide"
  }



  return (
      <div className="App">
        <nav className="nav-bar">
          <div className="logo">
            <img src="LR_logo.png" />
          </div>
          <ul className={desktopNavStyle}>
            <li><a href="#hero" className="desktop-nav-link">Home</a></li>

            <li><a href="#portfolio" className="desktop-nav-link">Portfolio</a></li>

            <li><a href="#resume" className="desktop-nav-link">Resume</a></li>

            <li><a href="#about" className="desktop-nav-link">About</a></li>

            <li><a href="#footer" className="desktop-nav-link">Contact</a></li>
          </ul>

            <ul className={mobileNavStyle}>
              <div className="mobile-nav-exit" onClick={navMenuToggle}><FontAwesomeIcon icon={faTimes} /></div>
              <li><a href="#hero" className="mobile-nav-link" onClick={closeNavMenu}>Home</a></li>

              <li><a href="#portfolio" className="mobile-nav-link" onClick={closeNavMenu}>Portfolio</a></li>

              <li><a href="#resume" className="mobile-nav-link" onClick={closeNavMenu}>Resume</a></li>

              <li><a href="#about" className="mobile-nav-link" onClick={closeNavMenu}>About</a></li>

              <li><a href="#footer" className="mobile-nav-link" onClick={closeNavMenu}>Contact</a></li>
            </ul>

          <div className="burger" onClick={navMenuToggle}><FontAwesomeIcon icon={faBars} /></div>
        </nav>

        <header className="hero" id="hero">
          <div className="hero-content">
            <h1 className="heading">Hello, I'm Laura.</h1>
            <h2 className="subheading">I am a front end developer with back end experience.</h2>
          </div>
        </header>

        <section className="portfolio" id="portfolio">
          <div className="portfolio-content ">
            <h2>Portfolio</h2>
              <a href="https://github.com/laura-ross/portfolio.git" className="link secondary-link">Website Source Code</a>


            <div className="project">
              <div className="project-img-container">
                <img src="tasktimer.png" className="project-img"/>
              </div>
              <div className="project-content">
                <h2>Task Timer</h2>
                <h3>Description: </h3>
                <p>A browser based timer that allowes users to time a project they are working on and store it in a task history.</p>
                <h3>Tech used:</h3>
                <ul>
                  <li>ReactJS - useContext, useEffect</li>
                  <li>LocalStorage</li>
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
              <h2>All My Recipes</h2>
                <h3>Description: </h3>
                <p>A browser based recipe app where users can add, remove, and edit recipes. See the source code for the full version <a href="https://github.com/laura-ross/All-My-Recipes-Full-Version.git">here</a>. (This is a work in progress, but it has a backend/database with a register/login system)</p>
                <h3>Tech used:</h3>
                <ul>
                <li>ReactJS - class based components</li>
                <li>localStorage</li>
                <li>HTML5/CSS3</li>
                </ul>
                <a href="https://eager-galileo-41baa2.netlify.app/" className="link primary-link">Live Version</a>
                <a href="https://github.com/laura-ross/All-My-Recipes---Recipes-Component-Only.git" className="link secondary-link">Source Code</a>
              </div>
            </div>

            <div className="project">
              <div className="project-img-container">
                <img src="sticky-notes.png" className="project-img"/>
              </div>
              <div className="project-content">
                <h2>Sticky Notes App</h2>
                <h3>Description: </h3>
                <p>A browser based sticky notes app that allows users to add a remove sticky notes & save them on local storage. Work in progress, but this is what is completed so far.</p>
                <h3>Tech used:</h3>
                <ul>
                  <li>Vanilla Javascript - DOM manipulation, Object Oriented Programming</li>
                  <li>LocalStorage</li>
                  <li>Bootstrap 4</li>
                  <li>SASS</li>
                  <li>HTML5/CSS3</li>
                </ul>
                <a href="https://angry-knuth-efd3f0.netlify.app/" className="link primary-link">Live Version</a>
                <a href="https://github.com/laura-ross/Sticky-Notes-App.git" className="link secondary-link">Source Code</a>
              </div>
            </div>

            <div className="project">
              <div className="project-img-container">
                <img src="oldpioneerstore.jpg" className="project-img"/>
              </div>
              <div className="project-content">
                <h2>Local Business Redesign</h2>
                <h3>Description: </h3>
                <p>A revamp of one of my favorite small businesses. NOTE: The routing is functional but the shopping cart portion is not. I simply wanted show that I could reimagine a current design using current branding/colors/content. See the original website for comparison <a href="http://www.theoldpioneerstore.com/">here</a>.</p>
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
            <div className="resume-intro-content">
              <p>At this point, I do not have any paid/professional development experience. Below is some relevent info & fun facts about myself. If you like what you see but prefer to see some other skills or knowledge, feel free to contact me and we can chat about it. I am 100% open to learning any technology that your business uses. </p>

              <a href="/Resume_Laura_Ross.pdf" className="link primary-link resume-link">Resume</a>
            </div>

            <div className="resume-padding">
              <h2>Relevent Facts</h2>
              <div className="flex-container">
              <ul>
                <h3>Proficient in:</h3>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>SASS</li>
                <li>BulmaCSS</li>
                <li>Bootstrap</li>
                <li>Javascript</li>
                <li>ReactJS</li>
                <li>Axios</li>
                <li>InDesign</li>
              </ul>
              <ul>
                <h3>Experience in:</h3>
                <li>ExpressJS</li>
                <li>NodeJS</li>
                <li>MongoDB</li>
                <li>Photoshop</li>
              </ul>
              <ul>
                <h3>Currently working on:</h3>
                <li><p>An expense tracker using</p>
                <p>vanilla Javascript & Bootstrap</p></li>
              </ul>
              </div>
              <ul>
                <li>I've become a pro at researching solutions to development problems</li>
                <li>I am constantly learning new tech, striving to go deeper into what I've already used, but looking forward to expanding into new languages and frameworks.</li>
                <li>I am passionate about making the web beautiful and user friendly.</li>
                <li>I am willing to learn any sort of technology you need me to learn and am not married to any one language or framework. I chose the technologies above simply as a starting point but would love to explore others.</li>
                <li>I have 7 years of experience working with customers in both office and retail environments. I am extremely proud of my ability to provide a positive customer experience, through empathy, listening, on time delivery, & quality. These soft skills can easily translate into working well with other web developers & understanding business & client needs. </li>
              </ul>
            </div>

            <div className="resume-padding">
              <h2>Fun Facts</h2>
              <ul>
                <li>I love to cook, read, crochet, and be outside.</li>
                <li>I currently work at a factory that has absolutely nothing to do with web development. I make large wire harnesses that go into the engines of commercial planes.</li>
                <li>I went to school at Ferris State University and graduated with a Bachelor's in Graphic Media Management (printing).</li>
                <li>I've primarily worked print related jobs, emphasizing on customer service and operating various kinds of digital printers. At these jobs, I've also done some light design work using InDesign, Photoshop, and MS Office.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="about" id="about">
          <div className="about-content section-global-styles">
            <h2>About</h2>
            <p>I began teaching myself web development in April 2019. I started with the basics, HTML5 & CSS3, in order to create a solid foundation. Then I moved to Javascript and after that, ReactJS.</p>

            <p>After spending hours upon hours practicing, experimenting, google searching, and utilizing many other resources, I have finally developed a proficiency in these technologies. Currently I am working on a side project in order to help me go deeper into vanilla Javascript as well as understand Objected Oriented Programming at a more advanced level. </p>

            <p>Along this journey, I also got to use a few backend technologies, including NodeJS, ExpressJS, and MongoDB/Mongoose. Although these have not been my focus, I do have a good understanding of how to use them.</p>
          </div>
        </section>


        <footer className="footer" id="footer">
          <h2>Get in Touch!</h2>
          <p>laura.e.ross@gmail.com</p>

          <ul className="social-links section-global-styles">
            <li><a href="https://www.linkedin.com/in/laura-ross20/" className="tooltip">
              <FontAwesomeIcon icon={faLinkedinIn} size="lg" className="fa-icon"/>
              <span className="tooltiptext">Connect with me on LinkedIn</span>
            </a></li>
            <li><a href="https://twitter.com/LTheBossRoss" className="tooltip">
              <FontAwesomeIcon icon={faTwitter} size="lg" className="fa-icon"/>
              <span className="tooltiptext">Follow me on twitter</span>
            </a></li>
            <li><a href="https://github.com/laura-ross" className="tooltip">
              <FontAwesomeIcon icon={faGithubAlt} size="lg" className="fa-icon"/>
              <span className="tooltiptext">View all my source code on Github</span>
            </a></li>
          </ul>
          <p>&copy; Laura Ross 2020</p>
        </footer>
      </div>

  );
}

export default App;
