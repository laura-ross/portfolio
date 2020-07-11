import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  useHistory
 } from 'react-router-dom';
import './styles/App.css';
import Home from './components/Home';

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
            <li><Link to="/" className="nav-link" activeClassName="active" style={navLinkStyle}>Home</Link></li>
            <li><Link to="/" className="nav-link" activeClassName="active" style={navLinkStyle}>Portfolio</Link></li>
            <li><Link to="/" activeClassName="active" className="nav-link" style={navLinkStyle}>About</Link></li>
            <li><Link to="/" activeClassName="active" className="nav-link" style={navLinkStyle}>Contact</Link></li>
          </ul>
        </nav>

          <Switch>
            <Route path="/" component={Home}  />
          </Switch>

      </div>
    </Router>
  );
}

export default App;
