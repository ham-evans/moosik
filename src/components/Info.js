import React from 'react';
import "./Info.css";
import waveform3 from '../images/waveform3.png';


export default function About () {
    return (
        <div className="info__wrapper">
            <div className="info">
                <div className="info__container">
                    <div className="info__imgContainer">
                        <img src={waveform3} alt="Waveform" />
                    </div>
                    <h1 id="mission">Vision</h1> 
                    <p>Our vision to build an entire music related ecosystem connected with NFT technology. We understand this is the future of many industries, we just want to be the first to build something special and big to bring largest art industry in the world to NFT space.</p>
                    <h1>Mission</h1>
                    <p>Our mission is to help as many artists as possible in NFT space and make them grow with us. We will be doing talent hunts and giving opportunities to the new talent that has not yet been discovered.</p>
                </div>
            </div>  
        </div>
    
    );
}
