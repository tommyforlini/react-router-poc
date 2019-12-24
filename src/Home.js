import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import logo from './logo.svg';
import './App.css';

import About from './About';
import Contact from './Contact';
import Links from './Links';


const Home = () => {
  return (

    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>

      <Router>

        <div>
          <Link to="/landing">Home</Link> |
          <Link to="/landing/about">About</Link> |
          <Link to="/landing/contact">Contact</Link> |
          <Link to="/landing/links">Links</Link>
        </div>

        <Switch>
          <Route exact path="/landing">
            <h1>Home Page</h1>
          </Route>
          <Route path="/landing/about">
            <About />
          </Route>
          <Route path="/landing/contact">
            <Contact />
          </Route>
          <Route path="/landing/links">
            <Links />
          </Route>
        </Switch>
      </Router>

    </div>

  );
}

export default Home;
