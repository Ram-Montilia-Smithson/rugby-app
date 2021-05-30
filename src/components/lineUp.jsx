import React from 'react'
import Pitch from './pitch';
import "../scss/lineUp/lineUp.css"

// make pretty
// לעצב נאב באר של matchinfipage
    // להקטין ולעצב את איוונטס
    // להציג בגרפים את סטאטס
    // להקטין ולעצב את ליין אפ

export default function LineUp({ home, away, referees }) {
    
    const homeSubs = home.slice(15)
    const awaySubs = away.slice(15)

    return (
        <div className="line-up">
            <div className="subs">
                <h1>Substitutions:</h1>
                {homeSubs.map((player, index) => {
                    return (
                        <div key={player.player_id} className="sub">{index+16} {player.name}</div>
                    )
                })}
        </div>
            <Pitch team={home} />
            <div>
                <h1>Match Officials:</h1>
                {referees.map(referee => {
                        return (
                            <div className="referees" key={referee.name}>
                                <h2>{referee.role}: </h2>
                                <h4>{referee.name}</h4>
                            </div>
                        )
                })}
            </div>
            <Pitch team={away} />
            <div className="subs">
                <h1>Substitutions:</h1>
                {awaySubs.map((player, index) => {
                    return (
                        <div key={player.player_id} className="sub">{index + 16} {player.name}</div>
                    )
                })}
            </div>
        </div>
    )
}
