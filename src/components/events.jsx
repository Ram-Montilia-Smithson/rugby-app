import React from 'react'
import "../scss/events/events.css"
import Event from './event';

// make pretty
// smaller everything

export default function Events({ events }) {

    return (
        <div className="events">
            {events.map(event => {
                if (event.home_or_away === "home") {
                    return (
                        <div className="event-container">
                            <div>
                                <div className="event-time">{event.time}'</div>
                                <div className="home-team">
                                    <Event event={event}/>
                                </div>
                            </div>
                        </div>
                    )
                }
                if (event.home_or_away === "away") {
                    return (
                        <div className="event-container">
                            <div>
                                <div className="event-time">{event.time}'</div>
                                <div className="away-team">
                                    <Event event={event}/>
                                </div>
                            </div>
                        </div>
                    )
                }
                else { return (<></>) }
            })}

        </div>
    )
}
