import React from 'react'

// set the player card in a nice way

export default function Player({name, number}) {

    const positions = {
        1: "Loose-head prop", 17: "Loose-head prop" , 2: "Hooker", 16: "Hooker", 3: "Tight-head prop", 18: "Tight-head prop",
        4: "Lock", 5: "Lock", 19: "Lock", 6: "Blind-side flanker", 7: "Open-side flanker", 8: "Number 8", 20: "Loose forward",
        9: "Scrum half", 21: "Scrum half", 10: "Fly half", 11: "Wing", 14: "Wing", 12: "Center", 13: "Center", 15: "Full back",
        22: "Fly half", 23: "Utility back", 0: "Coach"
    }

    return (
        <div className="playerCard">
            <img src={`${process.env.PUBLIC_URL}/images/avatar.png`} alt={name}/>
            <div>{name}</div>
            <div>POSITION: {positions[number]}</div>
        </div>
    )
}
