import React from 'react'
import "../scss/lineUp/lineUp.css"



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
                    <span className="prop player">{team[7].name}</span>
                    <span className="prop player">{team[8].name}</span>
                    <span className="prop player">{team[9].name}</span>
                </div>
                <div className="second-row">
                    <span className="lock player">{team[10].name}</span>
                    <span className="lock player">{team[11].name}</span>
                </div>
                <div className="back-row">
                    <span className="loose player">{team[12].name}</span>
                    <span className="loose player">{team[14].name}</span>
                    <span className="loose player">{team[13].name}</span>
                </div>
                <div className="ten-up">
                    <span className="player">{team[6].name}</span>
                    <section></section>
                </div>
                <div className="ten-down">
                    <span className="player">{team[5].name}</span>
                </div>
                <div className="zone-c">
                    <span className="player">{team[3].name}</span>
                    <span className="outside-center player">{team[2].name}</span>
                </div>
                <div className="tt-down">
                    <span className="player">{team[4].name}</span>
                    <span className="fullback player">{team[0].name}</span>
                    <span className="player">{team[1].name}</span>
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
