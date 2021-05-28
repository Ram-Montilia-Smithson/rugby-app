import React from 'react'

// check correct images, mostly cards

export default function Event({ event }) {

    if (event.type === "Substitution") {
        return (
            <div>
                <img className="logo" src={`https://res.cloudinary.com/${process.env.REACT_APP_CLOUD_NAME}/image/upload/v1622033973/images/${event.type}.png`} alt={event.type} />
                <div style={{ color: "red" }}>{event.player_1_name}</div>
                <div style={{ color: "#33ff00" }}>{event.player_2}</div>
            </div>
        )
    }

    if (event.type === "Try" || "Conversion" || "Penalty") {
        return (
            <div>
                <img className="logo" src={`https://res.cloudinary.com/${process.env.REACT_APP_CLOUD_NAME}/image/upload/v1622033973/images/${event.type}.png`} alt={event.type} />
                <div>{event.player_1_name}</div>
            </div>
        )
    }

    if (event.type === "Penalty Try") {
        return (
            <div>
                <img className="logo" src={`https://res.cloudinary.com/${process.env.REACT_APP_CLOUD_NAME}/image/upload/v1622033973/images/Penalty_Try.png`} alt={event.type} />
                <div>Penalty Try</div>
            </div>
        )
    }

    if (event.type === "Drop Goal") {
        return (
            <div>
                <img className="logo" src={`https://res.cloudinary.com/${process.env.REACT_APP_CLOUD_NAME}/image/upload/v1622033973/images/Drop_Goal.png`} alt={event.type} />
                <div>{event.player_1_name}</div>
            </div>
        )
    }

    if (event.type === "Missed Drop Goal") {
        <div>
            <img className="logo" src={`https://res.cloudinary.com/${process.env.REACT_APP_CLOUD_NAME}/image/upload/v1622033973/images/Missed_Drop_Goal.png`} alt={event.type} />
            <div>{event.player_1_name}</div>
        </div>
    }

    if (event.type === "Yellow Card") {
        return (
            <div>
                <img className="logo" src={`https://res.cloudinary.com/${process.env.REACT_APP_CLOUD_NAME}/image/upload/v1622033973/images/Yellow.png`} alt={event.type} />
                <div>{event.player_1_name}</div>
            </div>
        )
    }

    if (event.type === "Red Card") {
        return (
            <div>
                <img className="logo" src={`https://res.cloudinary.com/${process.env.REACT_APP_CLOUD_NAME}/image/upload/v1622033973/images/Red.png`} alt={event.type} />
                <div>{event.player_1_name}</div>
            </div>
        )
    }
}
