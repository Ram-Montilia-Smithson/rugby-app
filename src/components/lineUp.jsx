import React from 'react'
import Pitch from './pitch';
import "../scss/lineUp/lineUp.css"

// include the subs as well somehow
// show both pitches side by side
// make referees pretty


export default function LineUp({home, away, referees}) {

    return (
        <div className="line-up">
            <Pitch team={home} />
            <div>
                <h3>referees</h3>
                {
                    referees.map(referee => {
                        return (
                            <div>
                                <span>{referee.country} </span>
                                <span>{referee.name} </span>
                                <span>{referee.role} </span>
                            </div>
                        )
                    })
                }
            </div>
            <Pitch team={away} />
            
        </div>
    )
}
