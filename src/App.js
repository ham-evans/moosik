import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Welcome from './components/Welcome'
import Timeline from './components/Timeline'
import About from './components/About'
import Team from './components/Team'
import Info from './components/Info'
import Footer from './components/Footer'
import { BrowserRouter as Router, Switch } from "react-router-dom";


class App extends Component {
  
  render() {
    return (
      <>
        <Router>
          <Switch />
          <Navbar />
          <Welcome />
          <Home />
          <About />
          <Timeline />
          <Info />
          <Team />
          <Footer />
        </Router> 
      </>
    );
  }
}

export default App;
