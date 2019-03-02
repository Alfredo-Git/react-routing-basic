import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/misc/NavBar';

import { Switch, Route, Redirect } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Profile from './components/Profile';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>

        <section className="section">
          <div className="container">
            <Switch>
              <Route exact path="/home" component={Home}/>
              <Route exact path="/about" component={About} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/profile" component={Profile} />
              <Redirect to="/home"/>
            </Switch>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
