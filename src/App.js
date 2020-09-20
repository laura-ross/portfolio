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
                <h3>Challenge:</h3>
                <p>To allow users to time whatever it is they are doing and store it in a task history.</p>
                <h3>Tech used:</h3>
                <ul>
                  <li>ReactJS - useContext, useEffect</li>
                  <li>Timing Event Methods</li>
                  <li>Responsive web design</li>
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
              <h2>Recipe App</h2>
                <h3>Challenge: </h3>
                <p>Allow users to add, remove, and edit recipes and have them persist upon closing and reopening the browser. See the source code for the full version <a href="https://github.com/laura-ross/All-My-Recipes-Full-Version.git">here</a>. (This is a work in progress, but it has a backend/database with a register/login system)</p>
                <h3>Tech used:</h3>
                <ul>
                <li>ReactJS - class based components</li>
                <li>Responsive web design</li>
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
                <h3>Challenge: </h3>
                <p>Allow users to add and remove sticky notes from the browser and have them persist upon closing/reopening the browser. Also give it a fun looking design</p>
                <h3>Tech used:</h3>
                <ul>
                  <li>Vanilla Javascript - DOM manipulation, Object Oriented Programming</li>
                  <li>LocalStorage</li>
                  <li>Bootstrap 4</li>
                  <li>SASS</li>
                  <li>Responsive web design</li>
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
                <li>Responsive web design</li>
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
              <p>Below is some relevent info & fun facts about myself. If you like what you see but prefer to see some other skills or knowledge, feel free to contact me and we can chat about it. I am 100% open to learning any technology that your business uses. </p>

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
              </div>
              <ul>
                <li>I've become a pro at researching solutions to development problems</li>
                <li>I am constantly learning new tech, striving to go deeper into what I've already used, but looking forward to expanding into new languages and frameworks.</li>
                <li>I am passionate about making the web beautiful and user friendly.</li>
                <li>I am willing to learn any sort of technology you need me to learn and am not married to any one language or framework. I chose the technologies above simply as a starting point but would love to explore others.</li>
                <li>I have 7 years of experience working with customers in both office and retail environments. I am extremely proud of my ability to provide a positive customer experience, through empathy, listening, on time delivery, & quality. These soft skills can easily translate into working in a team environment with other web developers & understanding client needs. </li>
              </ul>
            </div>

            <div className="resume-padding">
              <h2>Fun Facts</h2>
              <ul>
                <li>I love to cook, read, crochet, and be outside.</li>
                <li>I went to school at Ferris State University and graduated with a Bachelor's in Graphic Media Management (printing).</li>
                <li>I've primarily worked print related jobs, emphasizing on customer service and operating various kinds of digital printers. At these jobs, I've also done some design work using InDesign, Photoshop, and MS Office.</li>
                <li>Because of my experience in the print industry, I understand the need to communicate with users clearly and ensure a website or app is user friendly. Just as it is important to ensure printed products tell a story and deliver a clear message to the target audience, it is equally important to do the same with web products.  Web development is simply another form of marketing. The difference is with web, you are not only dealing with fonts, colors, and graphics, but you are also dealing with load time, ease of navigation, browser compatability, and much more. But it is all for the same purpose. To drive a user to take an action such as click a button, sign up for a newsletter, or buy a product. Both web and print require a similar thought process in order to serve it's purpose successfully.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="about" id="about">
          <div className="about-content section-global-styles">
            <h2>About</h2>
            <p>I went to school to learn print, but fell in love with web development.</p>

            <p>I was first introduced to web development in college, when I was nearly finished with my degree. I got my hands on a Head First HTML textbook and out of pure curiosity, decided to go through it. I had always been curious about how the web worked. What is this thing that I spend hours each day using? What is this huge communication platform that has totally transformed every fabric of our lives? That was my first introduction to web development and little did I know, it planted a seed of curiosity that would only grow as the years went by. </p>

            <p>Life got busy. And I never made a point to use that knowledge, but I tucked it away in the back of my mind to explore later. When life finally settled down a little bit, I decided to pick it up again. But this time, I did not stop with HTML and CSS. I went on to Javascript and then ReactJS and back end tools such as NodeJS, ExpressJS, MongDB, Mongoose, and how to communicate between the front and back end.</p>

            <p>I realized the process of creating websites and apps makes me happy. It's the curiosity that drives me to keep learning new tech and the thrill of solving problems that keeps me building projects. It's also the desire to push the boundaries of web & software development. To create incredible, beautiful, and user friendly products. And the realization that the tech world is full of possibilities, languages, frameworks, libraries, and concepts to learn and explore. It's knowing that I'll never get bored. And that we probably haven't even scratched the surface of what's possible. That's what keeps me excited about this industry.</p>
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
