import React, {useEffect, useState} from 'react';
import { defaults, Bar, Line } from 'react-chartjs-2/dist/index'


export default function Stats({ homeStats, awayStats}) {

    // console.log(defaults)

    const [homeAttack, setHomeAttack] = useState([])
    const [awayAttack, setAwayAttack] = useState([])
    const [homeDefence, setHomeDefence] = useState([])
    const [awayDefence, setAwayDefence] = useState([])
    const [homeBreakDown, setHomeBreakDown] = useState([])
    const [awayBreakDown, setAwayBreakDown] = useState([])
    const [homeFouls, setHomeFouls] = useState([])
    const [awayFouls, setAwayFouls] = useState([])
    const [homeKicking, setHomeKicking] = useState([])
    const [awayKicking, setAwayKicking] = useState([])
    const [homePossession, setHomePossession] = useState([])
    const [awayPossession, setAwayPossession] = useState([])
    const [homeLineOut, setHomeLineOut] = useState([])
    const [awayLineOut, setAwayLineOut] = useState([])
    const [homeScrum, setHomeScrum] = useState([])
    const [awayScrum, setAwayScrum] = useState([])

    useEffect(() => {
        setHomeAttack(homeStats.attack)
        setAwayAttack(awayStats.attack)
        setHomeDefence(homeStats.defence)
        setAwayDefence(awayStats.defence)
        setHomeBreakDown(homeStats.breakdown)
        setAwayBreakDown(awayStats.breakdown)
        setHomeFouls(homeStats.discipline)
        setAwayFouls(awayStats.discipline)
        setHomeKicking(homeStats.kicking)
        setAwayKicking(awayStats.kicking)
        setHomeLineOut(homeStats.lineouts)
        setAwayLineOut(awayStats.lineouts)
        setHomePossession(homeStats.possession)
        setAwayPossession(awayStats.possession)
        setHomeScrum(homeStats.scrums)
        setAwayScrum(awayStats.scrums)
        return () => {
            setHomeAttack([])
            setAwayAttack([])
            setHomeDefence([])
            setAwayDefence([])
            setHomeBreakDown([])
            setAwayBreakDown([])
            setHomeFouls([])
            setAwayFouls([])
            setHomeKicking([])
            setAwayKicking([])
            setHomeLineOut([])
            setAwayLineOut([])
            setHomePossession([])
            setAwayPossession([])
            setHomeScrum([])
            setAwayScrum([])
        }
    }, [homeStats, awayStats])

    return (
        <div>
            
            <div>
                <h2>attack</h2>
                {homeAttack.map(stat => {
                    return (
                        <div>HOME-
                            <span>{stat.stat}:</span>
                            <span>{stat.value}</span>
                        </div>
                    )
                })}
                {awayAttack.map(stat => {
                    return (
                        <div>AWAY-
                            <span>{stat.stat}:</span>
                            <span>{stat.value}</span>
                        </div>
                    )
                })}
            </div>
            <div>
                <h2>defence</h2>
                {homeDefence.map(stat => {
                    return (
                        <div>HOME-
                            <span>{stat.stat}:</span>
                            <span>{stat.value}</span>
                        </div>
                    )
                })}
                {awayDefence.map(stat => {
                    return (
                        <div>AWAY-
                            <span>{stat.stat}:</span>
                            <span>{stat.value}</span>
                        </div>
                    )
                })}
            </div>
            <div>
                <h2>kicking</h2>
                {homeKicking.map(stat => {
                    return (
                        <div>HOME-
                            <span>{stat.stat}:</span>
                            <span>{stat.value}</span>
                        </div>
                    )
                })}
                {awayKicking.map(stat => {
                    return (
                        <div>AWAY-
                            <span>{stat.stat}:</span>
                            <span>{stat.value}</span>
                        </div>
                    )
                })}
            </div>
            <div>
                <h2>scrum</h2>
                {homeScrum.map(stat => {
                    return (
                        <div>HOME-
                            <span>{stat.stat}:</span>
                            <span>{stat.value}</span>
                        </div>
                    )
                })}
                {awayScrum.map(stat => {
                    return (
                        <div>AWAY-
                            <span>{stat.stat}:</span>
                            <span>{stat.value}</span>
                        </div>
                    )
                })}
            </div>
            <div>
                <h2>fouls</h2>
                {homeFouls.map(stat => {
                    return (
                        <div>HOME-
                            <span>{stat.stat}:</span>
                            <span>{stat.value}</span>
                        </div>
                    )
                })}
                {awayFouls.map(stat => {
                    return (
                        <div>AWAY-
                            <span>{stat.stat}:</span>
                            <span>{stat.value}</span>
                        </div>
                    )
                })}
            </div>
            <div>
                <h2>possession</h2>
                {homePossession.map(stat => {
                    return (
                        <div>HOME-
                            <span>{stat.stat}:</span>
                            <span>{stat.value}</span>
                        </div>
                    )
                })}
                {awayPossession.map(stat => {
                    return (
                        <div>AWAY-
                            <span>{stat.stat}:</span>
                            <span>{stat.value}</span>
                        </div>
                    )
                })}
            </div>
            <div>
                <h2>line outs</h2>
                {homeLineOut.map(stat => {
                    return (
                        <div>HOME-
                            <span>{stat.stat}:</span>
                            <span>{stat.value}</span>
                        </div>
                    )
                })}
                {awayLineOut.map(stat => {
                    return (
                        <div>AWAY-
                            <span>{stat.stat}:</span>
                            <span>{stat.value}</span>
                        </div>
                    )
                })}
            </div>
            <div>
                <h2>breakdown</h2>
                {homeBreakDown.map(stat => {
                    return (
                        <div>HOME-
                            <span>{stat.stat}:</span>
                            <span>{stat.value}</span>
                        </div>
                    )
                })}
                {awayBreakDown.map(stat => {
                    return (
                        <div>AWAY-
                            <span>{stat.stat}:</span>
                            <span>{stat.value}</span>
                        </div>
                    )
                })}
            </div>


            <div style={{width: "400px", heigth: "400px", marginLeft: "200px"}}>


                <Bar
                    data={{
                        labels: [
                            'January', 'February', 'March', 'April', 'May'
                        ],
                        datasets: [
                            {
                                label: 'Rainfall',
                                backgroundColor: 'rgba(75,192,192,1)',
                                borderColor: 'rgba(0,0,0,1)',
                                borderWidth: 2,
                                data: [65, 59, 80, 81, 56],
                            }
                        ]
                    }}
                    options={{
                        plugins: {
                            title: {
                                display: true,
                                text:'Average Rainfall per month',
                                fontSize:20
                            },
                            legend:{
                                display: true,
                                position:'right'
                            }
                        }
                    }}
                />



                <Line
                    data={{
                        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                        datasets: [
                            {
                                label: "# of votes",
                                data: [1.1,1.2,1.3,1.1,1.2,1.1],
                                backgroundColor: "black",
                                borderColor: "white",
                                borderWidth: 1,
                                fill: {
                                    target: 'origin',
                                    above: 'rgb(255, 0, 0)',   // Area will be red above the origin
                                    below: 'rgb(0, 0, 255)'    // And blue below the origin
                                },
                                lineTension: 0.3,
                            }
                        ],
                    }}
                    height={1}
                    width={1}
                    options={{
                        responsive: true,
                        maintainAspectRatio: true,
                        plugins: {
                            title: {
                                display: true,
                                text:'Average Rainfall per month',
                                fontSize: "50px"
                            },
                            legend:{
                                display: true,
                                position:'right'
                            }
                        },
                        scales: {
                            y: {
                                beginAtZero: true
                            }
                        }
                    }}
                />
            </div>
        </div>
    )
}
