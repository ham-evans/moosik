import React from 'react';
import "./Team.css";
import anton from '../images/antonTeam.png';
import golden from '../images/goldenTeam.png';
import apollo from '../images/apolloTeam.png';
import pinapple from '../images/pinappleTeam.png';
import capt from '../images/captTeam.png';


export default function Team () {
    return (
        <div className="team" id="team">
            <div className="team__container">
                <h1>The Team</h1> 
            </div>
            <div className="team__imgContainer">
                <div className="team__imgIndividual">
                    <img src={capt} alt="IdK"/>
                        <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                        <p className="team__role">Capt Badger</p>
                        <p className="team__title">Founder & Artist</p>
                    </a>
                </div>
             
                <div className="team__imgIndividual">
                    <img src={pinapple} alt="Developer Squeebo"/>
                    <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                        <p className="team__role">PineapplePen</p>
                        <p className="team__title">Developer</p>
                    </a>
                </div>

                <div className="team__imgIndividual2">
                    <img src={golden} alt="Developer GoldenX"/>
                    <a href="https://twitter.com/GoldenXnft" target="_blank" rel="noreferrer">
                        <p className="team__role">GoldenX</p>
                        <p className="team__title">Developer</p>
                    </a>
                </div>
                <div className="team__imgIndividual2">
                    <img src={anton} alt="Developer Squeebo"/>
                    <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                        <p className="team__role">AntonTheSwan</p>
                        <p className="team__title">Ethereum Developer</p>
                    </a>
                </div>
                <div className="team__imgIndividual2">
                    <img src={apollo} alt="Developer Apollo 21"/>
                    <a href="https://twitter.com/Apollo21_NFT" target="_blank" rel="noreferrer">
                        <p className="team__role">Apollo21</p>
                        <p className="team__title">Web Developer</p>
                    </a>
                </div>
            </div>
            <div className="team__imgContainer2">
                <div className="team__imgIndividual">
                    <img src={golden} alt="Developer GoldenX"/>
                    <a href="https://twitter.com/GoldenXnft" target="_blank" rel="noreferrer">
                        <p className="team__role">GoldenX</p>
                        <p className="team__title">Developer</p>
                    </a>
                </div>
                <div className="team__imgIndividual">
                    <img src={anton} alt="Developer Squeebo"/>
                    <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                        <p className="team__role">AntonTheSwan</p>
                        <p className="team__title">Ethereum Developer</p>
                    </a>
                </div>
                <div className="team__imgIndividual">
                    <img src={apollo} alt="Developer Apollo 21"/>
                    <a href="https://twitter.com/Apollo21_NFT" target="_blank" rel="noreferrer">
                        <p className="team__role">Apollo21</p>
                        <p className="team__title">Web Developer</p>
                    </a>
                </div>
            </div>
        </div>
    
    );
}
