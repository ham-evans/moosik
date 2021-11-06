import React, {useState} from 'react';
import "./Info.css";
import { Link } from "react-router-dom";

export default function Info () {
    const [showResults1, setShowResults1] = useState(false)
    const [showResults3, setShowResults3] = useState(false)
    const [showResults4, setShowResults4] = useState(false)
    const [showResults5, setShowResults5] = useState(false)
    const [showResults6, setShowResults6] = useState(false)
    const onClick1 = () => setShowResults1(!showResults1)
    const onClick3 = () => setShowResults3(!showResults3)
    const onClick4 = () => setShowResults4(!showResults4)
    const onClick5 = () => setShowResults5(!showResults5)
    const onClick6 = () => setShowResults6(!showResults6)

    return (
        <div className="info2" id="info2">
            <div className="info2__container"  >
                <h1>FAQ's</h1> 
                <ul>
                    <li onClick={onClick1}>
                        <h4 className={showResults1 ? 'info2__minus' : 'info2__plus'}>When are Allymals for Sale?</h4>
                        { showResults1 ? <p>The first Allymal, Squiffy Badger Rabbit, can be minted on 19 October 2021.  See the Roadmap above for the following launches!</p> : null }
                    </li>
                    <li onClick={onClick3}>
                        <h4 className={showResults3 ? 'info2__minus' : 'info2__plus'}>How many Allymals NFT's will there be?</h4>
                        { showResults3 ? <p>There will be a total of 3210 NFT's of each 9 Allymals released into the metaverse!</p> : null }
                    </li>
                    <li onClick={onClick4}>
                        <h4 className={showResults4 ? 'info2__minus' : 'info2__plus'}>How much will an Allymal Cost?</h4>
                        { showResults4 ? <p>Allymals Mint Price will be 0.03 ETH!</p> : null }
                    </li>
                    <li onClick={onClick5}>
                        <h4 className={showResults5 ? 'info2__minus' : 'info2__plus'}>How many Allymals can I purchase at once?</h4>
                        { showResults5 ? <p>Allymals may be purchased 20 at a time.</p> : null }
                    </li>
                    <li onClick={onClick6}>
                        <h4 className={showResults6 ? 'info2__minus' : 'info2__plus'}>What if I have other questions!</h4>
                        { showResults6 ? <p>Join the discord <Link className="here__link" to={{ pathname: "https://discord.gg/8ZhPnMwC" }} target="_blank" >HERE</Link> and ask the team directly!</p> : null }
                    </li>
                </ul>
            </div>
        </div>
    );
}
