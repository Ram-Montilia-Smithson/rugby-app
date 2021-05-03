import React from 'react'
import "../scss/pitch/pitch.css"

// show the teams line up as circles on a pitch, arrange them based on their position
// include the subs as well somehow
// show both pitches side by side

export default function Pitch({ team }) {
    
    console.log(team);

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
                    <span className="player">{team[7].name}</span>
                    <span className="player">{team[8].name}</span>
                    <span className="player">{team[9].name}</span>
                </div>
                <div className="zone-b">
                    <div className="second-row">
                        <span className="player">{team[10].name}</span>
                        <span className="player">{team[11].name}</span>
                    </div>
                    <div className="back row">
                        <span className="player">{team[12].name}</span>
                        <span className="player">{team[14].name}</span>
                        <span className="player">{team[13].name}</span>
                    </div>
                </div>
                <div className="ten-up">
                    <span className="player">{team[6].name}</span>
                    <section></section>
                </div>
                <div className="ten-down">
                    <span className="player">{team[5].name}</span>
                </div>
                <div className="zone-c">
                    <div className="centers">
                        <span className="player">{team[3].name}</span>
                        <span className="outside-center player">{team[2].name}</span>
                    </div>
                </div>
                <div className="tt-down">
                    <div className="wings">
                        <span className="player">{team[4].name}</span>
                        <span className="player">{team[1].name}</span>
                    </div>
                    <div className="fullback">
                        <span className="player">{team[0].name}</span>
                    </div>
                </div>
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
                <div className="mid-pitch">
                    <div></div>
                </div>
                <div className="fifteen-right"></div>
                <div className="five-right"></div>
            </div>
        </div>
    )
}
