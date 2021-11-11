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
                    <p>A decentralized world where privacy, security , equality and innovation are priority.</p>
                    <h1>Mission</h1>
                    <p>To bring Web3 and the world closer.</p>
                </div>
            </div>  
        </div>
    
    );
}
