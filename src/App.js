import React from 'react';
import './App.css';
import Home from './Components/Home.js';
import Navbar from './Components/Navbar.js';
import Gallery from './Components/Gallery.js';
import Resume from './Components/Resume.js';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Divider } from "semantic-ui-react";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Divider hidden>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/gallery">
            <Gallery />
          </Route>
          <Route path="/resume">
            <Resume />
          </Route>
          
        </Switch>
        </Divider>
      </Router>
    </div>
  );
}