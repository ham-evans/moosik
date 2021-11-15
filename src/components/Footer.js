import React, { Component } from 'react'; 
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'

import "./Footer.css";

export default class Footer extends Component { 
  render () {
    return (
      <nav className="footer">
        <div className="footer-container">
          <HashLink smooth to="#home" className="footer-logo">
            <h1>m00sik</h1>
          </HashLink>

          <ul className="footer-menu">
            <li className="footer-item">
              <Link className="footer-links" to={{ pathname: "https://twitter.com/M00Sik" }} target="_blank" >
                <FontAwesomeIcon icon={faTwitter} />
              </Link>
            </li>
            <li className="footer-item">
              <Link className="footer-links" to={{ pathname: "https://www.youtube.com/channel/UCpYNk92YAnFCLaza7kco9Nw" }} target="_blank" >
                <FontAwesomeIcon icon={faYoutube} />
              </Link>
            </li>
            <li className="footer-item">
              <Link className="footer-links" to={{ pathname: "https://discord.com/invite/XP5DDdExgg" }} target="_blank" >
                <FontAwesomeIcon icon={faDiscord} />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}