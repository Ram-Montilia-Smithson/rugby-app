import React from 'react';
import "../scss/infoPageHeader/infoHeader.css"

// add info like the one in matchInfoComponent.jsx
// think of more ideas

export default function MatchInfoPageHeader({ info }) {
    
    return (
        <div className="head-line-container">
            <div className="head-line">
                {info.home_team && <span>{info.home_team.toUpperCase()}</span>}
                <img className="logo" src={`https://res.cloudinary.com/${process.env.REACT_APP_CLOUD_NAME}/image/upload/v1622033973/images/${info.home_id}.png`} alt={info.home_team}/>
                <span className="score">{info.home_score} - {info.away_score}</span>
                <img className="logo" src={`https://res.cloudinary.com/${process.env.REACT_APP_CLOUD_NAME}/image/upload/v1622033973/images/${info.away_id}.png`} alt={info.away_team}/>
                {info.away_team && <span>{info.away_team.toUpperCase()}</span>}
            </div>
        
        </div>
    )
}
