import React from 'react';
import './App.css';
import Home from './Components/Home.js';
import Navbar from './Components/Navbar.js';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Divider } from "semantic-ui-react";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
      <Divider>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          
        </Switch>
        </Divider>
      </Router>
    </div>
    
  );
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
