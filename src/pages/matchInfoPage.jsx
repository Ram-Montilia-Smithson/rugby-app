import React, {useEffect, useState} from 'react';
import { defaults, Bar, Line } from 'react-chartjs-2/dist/index'
import { match } from "../utils/api/mockData"
import Pitch from "../components/pitch"
import InfoPageHeader from "../components/infoPageHeader"
import MatchInfoComponent from '../components/matchInfoComponent';


// show all relevant info about the match, there is so much of it
// be creative as you go over the info and think how should you show it.
// charts.js
// copy from ultimate rugby
// and from other sport websites

export default function MatchInfoPage({ id, matchChoice }) {
    
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
    const [events, setEvents] = useState([])
    const [referees, setReferees] = useState([])
    const [homeTeam, setHomeTeam] = useState([])
    const [awayTeam, setAwayTeam] = useState([])

    useEffect(() => {
        console.log(id);
        // console.log(defaults)
        const data = match(id).results
        setHomeAttack(data.home.team_stats.attack)
        setAwayAttack(data.away.team_stats.attack)
        setHomeDefence(data.home.team_stats.defence)
        setAwayDefence(data.away.team_stats.defence)
        setHomeBreakDown(data.home.team_stats.breakdown)
        setAwayBreakDown(data.away.team_stats.breakdown)
        setHomeFouls(data.home.team_stats.discipline)
        setAwayFouls(data.away.team_stats.discipline)
        setHomeKicking(data.home.team_stats.kicking)
        setAwayKicking(data.away.team_stats.kicking)
        setHomeLineOut(data.home.team_stats.lineouts)
        setAwayLineOut(data.away.team_stats.lineouts)
        setHomePossession(data.home.team_stats.possession)
        setAwayPossession(data.away.team_stats.possession)
        setHomeScrum(data.home.team_stats.scrums)
        setAwayScrum(data.away.team_stats.scrums)
        setEvents(data.events)
        setReferees(data.referees)
        setHomeTeam(data.home.teamsheet)
        setAwayTeam(data.away.teamsheet)
    }, [id])


    return (
        <div>
            <div>
                <h1>header</h1>
                <InfoPageHeader events={events}/>
            </div>
            <div>
                <MatchInfoComponent
                    id={id}
                    showMoreInfo={[id]}
                    link={false}
                />
            </div>
            <div>
                <h2>line up</h2>
                <Pitch team={homeTeam} />
                <div>
                    <h3>referees</h3>
                    {referees.map(referee => {
                        return (
                            <div>
                                <span>{referee.country} </span>
                                <span>{referee.name} </span>
                                <span>{referee.role} </span>
                            </div>
                        )
                    })}
                </div>
                <Pitch team={awayTeam} />
            </div>
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


            {/* <div style={{width: "400px", heigth: "400px", marginLeft: "200px"}}>


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
            </div> */}

        </div>
    )
}
