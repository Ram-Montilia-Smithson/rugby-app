import React from 'react'
import "../scss/events/events.css"

// every event.type, would be a different image
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
                                <div className="event-time">{event.time}'</div>
                                <div className="home-team">
                                    <img className="logo" src={`${process.env.PUBLIC_URL}/${event.type}.png`} alt={event.type}/>
                                    {event.type === "Substitution" &&
                                        <div>
                                            <div style={{color: "red"}}>{event.player_1_name}</div>
                                            <div style={{ color: "#33ff00"}}>{event.player_2}</div>
                                        </div>
                                    }
                                    {event.type === "Penalty Try" &&
                                        <div>
                                            <div>Penalty Try</div>
                                        </div>
                                    }
                                    {event.type==="Try" &&
                                        <div>
                                            <div>{event.player_1_name}</div>
                                        </div>
                                    }
                                    {event.type==="Conversion" &&
                                        <div>
                                            <div>{event.player_1_name}</div>
                                        </div>
                                    }
                                    {event.type==="Penalty" &&
                                        <div>
                                            <div>{event.player_1_name}</div>
                                        </div>
                                    }
                                    {event.type==="Drop Goal" &&
                                        <div>
                                            <div>{event.player_1_name}</div>
                                        </div>
                                    }
                                    {event.type==="Missed Drop Goal" &&
                                        <div>
                                            <div>{event.player_1_name}</div>
                                        </div>
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
                                <div className="event-time">{event.time}'</div>
                                <div className="away-team">
                                    <img className="logo" src={`${process.env.PUBLIC_URL}/${event.type}.png`} alt={event.type} />
                                    {event.type === "Substitution" ?
                                        <div>
                                            <div style={{ color: "red" }}>{event.player_1_name}</div>
                                            <div style={{ color: "#33ff00" }}>{event.player_2}</div>
                                        </div>
                                        :
                                        <div>{event.player_1_name}</div>
                                    }
                                </div>
                            </div>
                        </div>
                    )
                }
                else {return (<></>)}
            })}
            
        </div>
    )
}
