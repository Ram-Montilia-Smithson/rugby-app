import React, { useEffect, useState, useRef } from 'react'
import "../scss/main.css"
import { Link } from 'react-router-dom';
import { match } from "../utils/api/mockData";

// consider layout and info in the component

export default function MatchInfoComponent({ id, status, matchChoice, showMoreInfo}) {

    const [isShowMore, setIsShowMore] = useState(false)

    const [awayTeam, setAwayTeam] = useState("")
    const [homeTeam, setHomeTeam] = useState("")
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
        if (showMoreInfo.includes(id)) {
            setIsShowMore(true)
        }
        if (!showMoreInfo.includes(id)) {
            setIsShowMore(false)
        }
        console.log(match(id).results);
        const data = match(id)
        setHomeTeam(data.results.match.home_team)
        setAwayTeam(data.results.match.away_team)
        setHomeTries(data.results.match.home_tries)
        awayTries.current = data.results.match.away_tries
        setHomeConversions(data.results.match.home_conversions)
        setAwayConversions(data.results.match.away_conversions)
        setHomePenalties(data.results.match.home_penalties)
        setAwayPenalties(data.results.match.away_penalties)
        setHomeDropGoals(data.results.match.home_drop_goals)
        setAwayDropGoals(data.results.match.away_drop_goals)
        setHomePossesion(data.results.home.team_stats.possession[0].value)
        setAwayPossesion(data.results.away.team_stats.possession[0].value)
    }, [id, showMoreInfo])

    return (
        <>
            {isShowMore &&
                <div className="fixture-moreInfo">
                <div className="fixture-status">{status.toUpperCase()}</div>
                    <div className="progress-bar">
                        <div>POSSESSION</div>
                        <div className="progress-home" style={{width: `${homePossesion*100}%`}}>{homePossesion*100}%</div>
                        <div className="progress-away" style={{width: `${awayPossesion*100}%`, display: "inline-block"}}>{awayPossesion*100}%</div>
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
                    onClick={() => matchChoice(id)}
                        className="fixture-link"
                        to={`/matchInfo?${homeTeam}v${awayTeam}`}
                    >
                        COMPLETE MATCH INFO
                    </Link>    
                </div>
            }
        </>
    )
}
