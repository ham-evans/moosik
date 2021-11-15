import React from 'react';
import "./Display.css";
import example1 from '../images/example1.png'
import example2 from '../images/example2.png'
import example3 from '../images/example3.png'
import sound1 from '../images/example1.mp3'
import sound2 from '../images/example2.mp3'
import sound3 from '../images/example3.mp3'

export default function Display (handleSongLoading, handleSongPlaying, handleSongFinishedPlaying) {

    return (
        <div className="display__wrapper" id="display">
            <div className="display">
                <div className="display__container">
                    <div className="display__individual">
                        <img src={example1} alt="waveform example"/>
                        <audio controls>
                            <source src={sound1} type="audio/mpeg" />
                        </audio>
                    </div>
                    <div className="display__individual">
                        <img src={example2} alt="waveform example" />
                        <audio controls>
                            <source src={sound2} type="audio/mpeg" />
                        </audio>
                    </div>
                    <div className="display__individual">
                        <img src={example3} alt="waveform example" />
                        <audio controls>
                            <source src={sound3} type="audio/mpeg" />
                        </audio>
                    </div>
                </div>
            </div>  
        </div>
    
    );
}
