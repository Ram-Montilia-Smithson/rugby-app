import React from 'react'
import "../scss/lineUp/lineUp.css"

// add breaking points, mobile

export default function Pitch({ team }) {
    
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
                    <span className="prop player"><span className="number">1.</span> {team[7].name}</span>
                    <span className="prop player"><span className="number">2.</span> {team[8].name}</span>
                    <span className="prop player"><span className="number">3.</span> {team[9].name}</span>
                </div>
                <div className="second-row">
                    <span className="lock player"><span className="number">4.</span> {team[10].name}</span>
                    <span className="lock player"><span className="number">5.</span> {team[11].name}</span>
                </div>
                <div className="back-row">
                    <span className="loose player"><span className="number">6.</span> {team[12].name}</span>
                    <span className="loose player"><span className="number">8.</span> {team[14].name}</span>
                    <span className="loose player"><span className="number">7.</span> {team[13].name}</span>
                </div>
                <div className="ten-up">
                    <span className="player"><span className="number">9.</span> {team[6].name}</span>
                    <section></section>
                </div>
                <div className="ten-down">
                    <span className="player"><span className="number">10.</span> {team[5].name}</span>
                </div>
                <div className="zone-c">
                    <span className="player"><span className="number">12.</span> {team[3].name}</span>
                    <span className="outside-center player"><span className="number">13.</span> {team[2].name}</span>
                </div>
                <div className="tt-down">
                    <span className="player"><span className="number">11.</span> {team[4].name}</span>
                    <span className="fullback player"><span className="number">15.</span> {team[0].name}</span>
                    <span className="player"><span className="number">14.</span> {team[1].name}</span>
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
