import React from 'react';
import "../scss/infoPageHeader/infoHeader.css"

// present the fist line big with logos.
// think of more ideas

export default function InfoPageHeader({ events, info }) {
    
    console.log(events);

    return (
        <div className="head-line-container">
            <div className="head-line">
                {info.home_team && <span>{info.home_team.toUpperCase()}</span>}
                <img className="logo" src="http://placekitten.com/200/300"/>
                {/* <img src={`${process.env.PUBLIC_URL}/images/comps/${info.home_team}.png`} alt={info.home_team}/> */}
                <span className="score">{info.home_score} - {info.away_score}</span>
                <img className="logo" src={`${process.env.PUBLIC_URL}/images/comps/${info.away_team}.png`} alt={info.away_team}/>
                {info.away_team && <span>{info.away_team.toUpperCase()}</span>}
            </div>
        
        </div>
    )
}
