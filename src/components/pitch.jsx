import React from 'react'
import "../scss/pitch/pitch.css"

// show the teams line up as circles on a pitch, arrange them based on their position
// include the subs as well somehow
// arrange the scss as well

export default function Pitch({team}) {
    return (
        <div className="pitch">
            <div className="horizontal-lines">
                <div className="in-goal-area-up">
                    <div className="posts-up">
                        <div className="crossbar"></div>
                    </div>
                </div>
                <div className="five-yard-up"></div>
                <div className="tt-up">
                    {/* <div className="front row"> */}
                        <span>hrhrh hrhrhrh</span>
                        <span>2</span>
                        <span>3</span>
                    {/* </div> */}
                </div>
                <div className="zone-b"></div>
                <div className="ten-up"></div>
                <div className="ten-down"></div>
                <div className="zone-c"></div>
                <div className="tt-down"></div>
                <div className="five-yard-down"></div>
                <div className="in-goal-area-down">
                    <div className="posts-down">
                        <div className="crossbar"></div>
                    </div>
                </div>
            </div>
            <div className="vertical-lines">
                <div className="five-left"></div>
                <div className="fifteen-left"></div>
                <div className="mid-pitch"></div>
                <div className="fifteen-right"></div>
                <div className="five-right"></div>
            </div>
            {/* 
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
            </div> */}
        </div>
    )
}
