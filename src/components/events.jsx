import React from 'react'
import "../scss/events/events.css"

// every event.type, would be a different image
// Try, Penalty Try, Conversion, Penalty, Drop Goal, Missed Drop Goal, Substitution"
// if (event.player_1_name === "No Player") it means its a penalty try
// make pretty
export default function Events({ events }) {

    console.log(events);

    return (
        <div className="events">
            {events.map(event => {
                if (event.home_or_away==="home") {
                    return (
                        <div className="event-container">
                            <div>
                                <div className="event-time">{event.time}</div>
                                <div></div>
                                <div className="home-team">
                                    <div>{event.type}</div>
                                    {event.type === "Substitution" ?
                                        <div>
                                            <div style={{color: "red"}}>{event.player_1_name}</div>
                                            <div style={{color: "green"}}>{event.player_2}</div>
                                        </div>
                                        :
                                        <div>{event.player_1_name}</div>
                                    }
                                </div>
                            </div>
                        </div>
                    )
                }
                if (event.home_or_away==="away") {
                    return (
                        <div className="event-container">
                            <div>
                                <div className="event-time">{event.time}</div>
                                <div></div>
                                <div className="away-team">
                                    <div>{event.type}</div>
                                    {event.type === "Substitution" ?
                                        <div>
                                            <div style={{ color: "red" }}>{event.player_1_name}</div>
                                            <div style={{ color: "green" }}>{event.player_2}</div>
                                        </div>
                                        :
                                        <div>{event.player_1_name}</div>
                                    }
                                </div>
                            </div>
                        </div>
                    )
                }
            })}
        </div>
    )
}
