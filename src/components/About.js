import React from 'react';
import "./About.css";
import about1 from '../images/Cat.png'
import about2 from '../images/Dog.png'
import about3 from '../images/Alpaca.png'
import about4 from '../images/Racoon.png'

export default function About () {
    return (
        <div className="about" id="project">
            <div className='about__box'>
                <div className="about__imgContainer">
                    <div className="about__wrapper">
                        <div className="about__group" >
                            <img className="about__imgIndividual" src={about1} alt="GATB Example"/>
                            <img className="about__imgIndividual" src={about2} alt="GATB Example"/>
                        </div>
                        <div className="about__group" >
                            <img className="about__imgIndividual" src={about4} alt="GATB Example" />
                            <img className="about__imgIndividual" src={about3} alt="GATB Example" />
                        </div>
                    </div>
                </div>
                <div className="about__container"  >
                    <h1>About Allymals</h1> 
                    <p>Each Allymal is built up from multiple different traits including backgrounds, body colour, eyes, mouth, clothing and more. These traits allow for all 3,210 of each Allymal to be uniquely generated, and no two Allymals will be the same.</p>
                    <p>5% of sales will be donated to childrens literacy charities, and 5% will be invested in the creation of a childrens book series based on the adventures of Squiffy Badger.  Members of the community will help decide the path of Squiffies future!</p>
                </div>
            </div>
        </div>
    );
}
