import React from 'react';
import "../scss/infoPageHeader/infoHeader.css"

// add info like the one in matchInfoComponent.jsx
// think of more ideas

export default function MatchInfoPageHeader({ info }) {
    
    console.log(info);

    return (
        <div className="head-line-container">
            <div className="head-line">
                {info.home_team && <span>{info.home_team.toUpperCase()}</span>}
                <img className="logo" src="http://placekitten.com/200/300" alt="cat"/>
                {/* <img src={`${process.env.PUBLIC_URL}/images/comps/${info.home_team}.png`} alt={info.home_team}/> */}
                <span className="score">{info.home_score} - {info.away_score}</span>
                <img className="logo" src={`${process.env.PUBLIC_URL}/images/comps/${info.away_team}.png`} alt={info.away_team}/>
                {info.away_team && <span>{info.away_team.toUpperCase()}</span>}
            </div>
        
        </div>
    )
}
