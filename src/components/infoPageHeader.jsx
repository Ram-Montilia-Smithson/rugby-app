import React from 'react'

// present the fist line big with logos.
// the event line, present as events on a line, the events would be arranged based on their event.time property
// every event.type, would be a different image
// Try, Penalty Try, Conversion, Penalty, Drop Goal, Missed Drop Goal, Substitution"
// based on event.home_or_away, the event would be above or underneath the line
// next to the event image, would appear the event.player_1_name
// if (event.player_1_name === "No Player") it means its a penalty try
// if (event.type === "substitution") there will be event.player_2_name, that would be shown next to event.player_1_name
// differentiate between the players with colours: green and red
// think of more ideas

export default function InfoPageHeader({events}) {
    return (
        <div>
            <div> first line
                <span>home team</span>
                <span> score </span>
                <span>away team</span>
            </div>
            <div> event line
                {events.map(event => {
                    return (
                        <>
                            <span>{event.type}</span>
                            <span>{event.time}</span>
                        </>
                    )
                })}
            </div>
        </div>
    )
}
