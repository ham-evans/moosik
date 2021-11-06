import React from 'react';
import "./Timeline.css";
import squiffy from '../images/squiffy1.png'
import mouse from '../images/tlMouse.png'
import cat from '../images/tlCat.png'
import terrier from '../images/tlTerrier.png'
import racoon from '../images/tlRacoon.png'
import alpaca from '../images/tlAlpaca.png'
import beaver from '../images/tlBeaver.png'
import otter from '../images/tlOtter.png'
import fox from '../images/fox.png'

export default function Timeline () {
    return (
        <div className="timeline" id="roadmap">
            <h1 className="timeline__title">Allymals Roadmap</h1>
            <div className="timeline__container">
                <div className="timeline-item" dropNum='Drop 1: Oct 21'>
                    <div className="timeline__text">
                        <h1>3210 Squiffy Badger Rabbits</h1>
                        <p>5 x 0.1 ETH prizes upon sell out!</p>
                    </div>
                    <div>
                        <img className="timeline__img" src={squiffy} alt="Allymal Example"/>
                    </div>
                    
                </div>
                
                <div className="timeline-item" dropNum='Drop 2: Dec 21'>
                    <div className="timeline__text">
                        <h1>3210 Marshell Mouses</h1>
                        <p>5 x 0.1 ETH prizes upon sell out!</p>
                    </div>
                    <div>
                        <img className="timeline__img" src={mouse} alt="Allymal Example"/>
                    </div>
                    
                </div>

                <div className="timeline-item" dropNum='Drop 3: Jan 22'>
                    <div className="timeline__text">
                        <h1>3210 Cassidy Cats</h1>
                        <p>5 x 0.1 ETH prizes upon sell out!</p>
                    </div>
                    <div>
                        <img className="timeline__img" src={cat} alt="Allymal Example"/>
                    </div>
                    
                </div>

                <div className="timeline-item" dropNum='Drop 4: Feb 22'>
                    <div className="timeline__text">
                        <h1>3210 Terry Terriers</h1>
                        <p>Free to owners of the first 3 Allymals! (Just pay gas)</p>
                    </div>
                    <div>
                        <img className="timeline__img" src={terrier} alt="Allymal Example"/>
                    </div>
                </div>

                <div className="timeline-item" dropNum='Drop 5: Mar 22'>
                    <div className="timeline__text">
                        <h1>3210 Franky Foxes</h1>
                        <p>5 x 0.1 ETH prizes upon sell out!</p>
                    </div>
                    <div>
                        <img className="timeline__img" src={fox} alt="Allymal Example"/>
                    </div>
                    
                </div>

                <div className="timeline-item" dropNum='Drop 6: Apr 22'>
                    <div className="timeline__text">
                        <h1>3210 Ronnie Racoons</h1>
                        <p>5 x 0.1 ETH prizes upon sell out!</p>
                    </div>
                    <div>
                        <img className="timeline__img" src={racoon} alt="Allymal Example"/>
                    </div>
                    
                </div>

                <div className="timeline-item" dropNum='Drop 7: May 22'>
                    <div className="timeline__text">
                        <h1>3210 Avery Alpacas</h1>
                        <p>5 x 0.1 ETH prizes upon sell out!</p>
                    </div>
                    <div>
                        <img className="timeline__img" src={alpaca} alt="Allymal Example"/>
                    </div>
                    
                </div>

                <div className="timeline-item" dropNum='Drop 8: Jun 22'>
                    <div className="timeline__text">
                        <h1>3210 Beau Beavers</h1>
                        <p>Mini Electric prize draw for those who own drops 1-8!</p>
                    </div>
                    <div>
                        <img className="timeline__img" src={beaver} alt="Allymal Example"/>
                    </div>
                    
                </div>

                <div className="timeline-item" dropNum='Drop 9: July 22'>
                    <div className="timeline__text">
                        <h1>3210 Oakley Otters</h1>
                        <p>Free to owners of 5 other Allymals! (Just pay gas)</p>
                    </div>
                    <div>
                        <img className="timeline__img" src={otter} alt="Allymal Example"/>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}
