import React from 'react';
import "./Roadmap.css"

export default function Roadmap () { 
    return (
        <div className="roadmap">
            <div className="roadmap__wrapper">
                <div className="titleWrapper" id="roadmap">
                    <h1>ROAD AHEAD</h1>
                </div>
                <div className="wrapper">
                    <div className="roadmap__elementFirst">
                        <p>M00Sik is designing a decentralized ecosystem centered around M00Sik NFT's.  These M00Sik NFT's will serve as the utility token in this ecosystem as it grows into a decentralized powerhouse.  Here are some plans for the future.</p>
                    </div>
                    <div className="roadmap__elements">
                        <h2>Royalty and Fee Free Marketplace</h2>
                        <p>To benefit our collectors and avoid the high fees of secondary marketplaces, we plan to build a royalty and fee free marketplace to allow for minimum fees on secondary sales.</p>
                    </div>
                    <div className="roadmap__elements">
                        <h2>Music Carnival</h2>
                        <p>Our most ambitious plan is to organize first ever NFT Music Carnival/festival specially for entire NFT community. All M00Sik NFT holders will get exclusive access to the event and special preference to this collaborative festival.</p>
                    </div>
                    <div className="roadmap__elements">
                        <h2>Metaverse Events</h2>
                        <p>We will have many Metaverse Events for our NFT holders where you can just chill, socialize and enjoy with other community members. We are already planning to have our first event in October end/November start.</p>
                    </div>
                    
                    <div className="roadmap__elements">
                        <h2>DAO</h2>
                        <p>The future of M00Sik lies in the introduction of tokenomics and the eventual creation of a DAO.  This will not only provide maximum decentralization but will allow the M00Sik community to drive the future of the project.</p>
                    </div>
                    <div className="roadmap__elements">
                        <h2>Merchandise</h2>
                        <p> Our Merchandise will be available for anyone who wants to flex their love for M00Sik, we will also send free merchandize to randomly selected NFT holders time to time as surprise. This will be premium quality, custom made and Unisex clothing. It will include Everything from T-Shirts to Shoes.</p>
                    </div>
                    <div className="roadmap__elements">
                        <h2>Metaverse Expansion</h2>
                        <p>To benefit M00Sik NFT holders we plan to expand the utility of M00Sik into the Metaverse.  Through online concerts, festivals, visual art airdrops, and much more, M00Sik holders wil be benefit from the coming musical revolution.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}