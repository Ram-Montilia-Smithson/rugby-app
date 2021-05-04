import React from 'react'
import Pitch from './pitch';
import "../scss/lineUp/lineUp.css"

// make pretty

export default function LineUp({ home, away, referees }) {
    
    const homeSubs = home.slice(15)
    const awaySubs = away.slice(15)
    // console.log();

    return (
        <div className="line-up">
            <div className="subs">
                <h1>Substitutions</h1>
                {homeSubs.map(player => {
                    return (
                        <div key={player.player_id} className="sub">{player.name}</div>
                    )
                })}
        </div>
            <Pitch team={home} />
            <div>
                <h1 className="referees">Match Officials:</h1>
                {referees.map(referee => {
                        return (
                            <div key={referee.name}>
                                <h3>{referee.role} </h3>
                                <span>{referee.name} - {referee.country}</span>
                                {/* <span>{referee.name} </span> */}
                            </div>
                        )
                })}
            </div>
            <Pitch team={away} />
            <div className="subs">
                <h1>Substitutions</h1>
                {awaySubs.map(player => {
                    return (
                        <div key={player.player_id} className="sub">{player.name}</div>
                    )
                })}
            </div>
        </div>
    )
}
