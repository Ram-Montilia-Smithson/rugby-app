import React from 'react'

// show the teams line up as circles on a pitch, arrange them based on their position
// include the subs as well somehow

export default function Pitch({team}) {
    return (
        <div className="pitch">
            <div className="front row">
                <span>prop</span>
                <span>hooker</span>
                <span>prop</span>
            </div>
            <div className="second row">
                <span>lock</span>
                <span>lock</span>
            </div>
            <div className="back row">
                <span>blind side</span>
                <span>number 8</span>
                <span>open side</span>
            </div>
            <div className="halves">
                <span>scrum half</span>
                <span>fly half</span>
            </div>
            <div className="centers">
                <span>inside center</span>
                <span>outside center</span>
            </div>
            <div className="wings">
                <span>left wing</span>
                <span>right wing</span>
            </div>
            <div className="fullback">
                <span>fullback</span>
            </div>
        </div>
    )
}
