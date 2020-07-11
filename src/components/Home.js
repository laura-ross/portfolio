import React from 'react';
import '../styles/App.css';
import '../styles/home.css';

function Home() {
  return (
      <header className="hero">
        <div className="hero-content">
          <h1 className="heading">Hello, I'm Laura.</h1>
          <h2 className="subheading">I am a front end web developer with some back end experience.</h2>
          <div className="hero-btn-group">
            <button className="btn primary-btn">Portfolio</button>
            <button className="btn secondary-btn">Resume</button>
          </div>
        </div>
      </header>
  );
}

export default Home;
