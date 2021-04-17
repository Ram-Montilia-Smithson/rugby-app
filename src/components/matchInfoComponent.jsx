import React, { useEffect, useState, useRef } from 'react'
import "../scss/main.css"
import { Link } from 'react-router-dom';


// fetch(`https://rugby-live-data.p.rapidapi.com/match/${id}`, {
// "method": "GET",
// "headers": {
// "x-rapidapi-key": "ef122e1472msh9e1a6187db0abafp1ca12ejsnab19288e6f05",
// "x-rapidapi-host": "rugby-live-data.p.rapidapi.com"
// }
// })
// .then(response => response.json())
// .then(data => {
// console.log(data)
const data = {
    "results": {
        "match": {
                "home_tries": 3,
                "home_conversions": 2,
                "home_penalties": 4,
                "home_drop_goals": 0,
                "away_tries": 3,
                "away_conversions": 2,
                "away_penalties": 4,
                "away_drop_goals": 0,
                "home_team": "Crusaders",
                "away_team": "Highlanders",
        },
        home: {
            team_stats: {
                possesion: [
                    {
                        value: 65
                    }
                ]
            }
        },
        away: {
            team_stats: {
                possesion: [
                    {
                        value: 35
                    }
                ]
            }
        }
    }
}
// })
// .catch(err => {
// 	console.error(err);
// });

export default function MatchInfoComponent({id, matchChoise, showMoreInfo}) {

    const [homeTries, setHomeTries] = useState(0)
    const awayTries = useRef(0)
    const [homeConversions, setHomeConversions] = useState(0)
    const [awayConversions, setAwayConversions] = useState(0)
    const [homePenalties, setHomePenalties] = useState(0)
    const [awayPenalties, setAwayPenalties] = useState(0)
    const [homeDropGoals, setHomeDropGoals] = useState(0)
    const [awayDropGoals, setAwayDropGoals] = useState(0)
    const [homePossesion, setHomePossesion] = useState(0)
    const [awayPossesion, setAwayPossesion] = useState(0)

    useEffect(() => {
        console.log(id, showMoreInfo, data.results.match.away)
        // insert fetch here
        setHomeTries(data.results.match.home_tries)
        awayTries.current = data.results.match.away_tries
        setHomeConversions(data.results.match.home_conversions)
        setAwayConversions(data.results.match.away_conversions)
        setHomePenalties(data.results.match.home_penalties)
        setAwayPenalties(data.results.match.away_penalties)
        setHomeDropGoals(data.results.match.home_drop_goals)
        setAwayDropGoals(data.results.match.away_drop_goals)
        setHomePossesion(data.results.home.team_stats.possesion[0].value)
        setAwayPossesion(data.results.away.team_stats.possesion[0].value)
    }, [id, showMoreInfo,data])

    return (
        <>
            {id === showMoreInfo ?
                <div className="fixture-moreInfo">
                    <div className="progress-bar">
                        <div>POSSESION</div>
                        <div className="progress-home" style={{width: `${homePossesion}%`}}>{homePossesion}%</div>
                        <div className="progress-away" style={{width: `${awayPossesion}%`, display: "inline-block"}}>{awayPossesion}%</div>
                    </div>

                    <div className="fixture-stats">
                        <span>{homeTries}</span>
                        <span className="fixture-label">TRIES</span>
                        <span>{awayTries.current}</span>
                    </div>
                    <div className="fixture-stats">
                        <span>{homeConversions}</span>
                        <span className="fixture-label">CONVERSION</span>
                        <span>{awayConversions}</span>
                    </div>
                    <div className="fixture-stats">
                        <span>{homePenalties}</span>
                        <span className="fixture-label">PENALTIES</span>
                        <span>{awayPenalties}</span>
                    </div>
                    <div className="fixture-stats">
                        <span>{homeDropGoals}</span>
                        <span className="fixture-label">DROP KICKS</span>
                        <span>{awayDropGoals}</span>
                    </div>
                    <Link
                        onClick={() => matchChoise(id)}    
                        className="fixture-link"
                        to={`/matchInfo?${data.results.match.home_team}v${data.results.match.away_team}`}
                    >
                        COMPLETE MATCH INFO
                    </Link>    
                </div>
            :
                <></>
            }
        </>
    )
}
