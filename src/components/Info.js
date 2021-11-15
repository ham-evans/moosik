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
                    <h1 id="mission">Rarity</h1>
                    <p>With varying length of m00sik files and different backgrounds, there are common, rare, and rarest tokens. Keep your ears out for the rare 1/1 m00sik as well!</p>
                    <h1>Vision</h1> 
                    <p>A decentralized world where privacy, security , equality and innovation are priority.</p>
                    <h1>Mission</h1>
                    <p>To bring Web3 and the world closer.</p>
                </div>
            </div>  
        </div>
    );
}
