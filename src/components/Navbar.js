import React, { Component } from 'react'; 
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faTimes, faBars } from '@fortawesome/free-solid-svg-icons'

import "./Navbar.css";

export default class Navbar extends Component { 
  state = {
    isOpen: false
  };

  handleToggle = () => { 
    this.setState({ isOpen: !this.state.isOpen })
  };

  render () {
    return (
      <nav className={this.state.isOpen ? "navbar active" : "navbar"} id="#fullhome">
        <div className="nav-container">
          <div className="nav-logo">
            <h2>
              M00Sik
            </h2>
          </div>
         
          <ul className={this.state.isOpen ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <HashLink
                smooth
                to="#about"
                className="nav-links"
              >
                ABOUT
              </HashLink>
            </li>
            <li className="nav-item">
              <HashLink
                smooth
                to="#roadmap"
                className="nav-links"
              >
                ROADMAP
              </HashLink>
            </li>
            <li className="nav-item">
              <HashLink
                smooth 
                to="#mission"
                className="nav-links"
              >
                MISSION
              </HashLink>
            </li>            
          </ul>
          <ul className="nav-menu">
            <li className="nav-item">
              <Link className="nav-links" to={{ pathname: "https://discord.com/invite/XP5DDdExgg" }} target="_blank" >
                <FontAwesomeIcon icon={faTwitter} />
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-links" to={{ pathname: "https://www.youtube.com/channel/UCpYNk92YAnFCLaza7kco9Nw" }} target="_blank" >
                <FontAwesomeIcon icon={faYoutube} />
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-links" to={{ pathname: "https://twitter.com/M00Sik" }} target="_blank" >
                <FontAwesomeIcon icon={faDiscord} />
              </Link>
            </li>
          </ul>
          <div className="nav-icon" onClick={this.handleToggle}>
            {this.state.isOpen ? <FontAwesomeIcon icon={faTimes} />
              : <FontAwesomeIcon icon={faBars} />
            }
          </div>
        </div>
      </nav>
    );
  }
}