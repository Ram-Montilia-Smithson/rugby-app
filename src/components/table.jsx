import React, {useState, useEffect} from 'react'
import "../scss/main.css"
import {Link} from "react-router-dom"


// copy from ultimate rugby, they use the exact same info
// responsiveness
// screen sizes
// intuitive
// download all teams's logos and show acordingly in table and fixtures



export default function Table({standings, teamChoise}) {

    const [tableName, setTableName] = useState("")
    const [table2Name, setTable2Name] = useState("")
    const [teams, setTeams] = useState([])
    const [moreTeams, setMoreTeams] = useState([])

    useEffect(() => {
        console.log(standings)
        if (standings.length === 1) {
            setTeams(standings[0].teams)
        }
        else {
            setTeams(standings[0].teams)
            setMoreTeams(standings[1].teams)
            setTableName(standings[0].table_name)
            setTable2Name(standings[1].table_name)
        }
    }, [standings])

    return (
        <div className="tables">
                {teams.length &&
                    <div className="table-container">
                        {moreTeams.length ? <h2>comp 1 {tableName}</h2> : <></>}
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>POS</th>
                                    <th>NAME</th>
                                    <th>P</th>
                                    <th>W</th>
                                    <th>D</th>
                                    <th>L</th>
                                    <th>POINTS +/-</th>
                                    <th>POINTS DIFF</th>
                                    <th>TRIES +/-</th>
                                    <th>TRY BONUS</th>
                                    <th>LOOSING BONUS</th>
                                    <th>POINTS</th>
                                </tr>
                            </thead>
                            <tbody>
                                {teams.map(team => {
                                        return(
                                            <tr key={team.id}>
                                                <td>{team.position}</td>
                                                <td>
                                                    <Link
                                                        to={`/team?${team.name}`}
                                                        onClick={() => teamChoise(team.id)}
                                                    >
                                                        {team.name}
                                                    </Link>
                                                </td>
                                                <td>{team.played}</td>
                                                <td>{team.won}</td>
                                                <td>{team.drawn}</td>
                                                <td>{team.lost}</td>
                                                <td>{team.points_for}/{team.points_against}</td>
                                                <td>{team.points_diff}</td>
                                                <td>{team.tries_for}/{team.tries_against}</td>
                                                <td>{team.try_bonus}</td>
                                                <td>{team.losing_bonus}</td>
                                                <td>{team.points}</td>
                                            </tr>
                                        )
                                })}
                            </tbody>
                        </table>
                    </div>
                }

                {moreTeams.length &&
                    <div className="table-container">
                        <h2>comp 2 {table2Name}</h2>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>POS</th>
                                    <th>NAME</th>
                                    {/* <th>symbol</th> */}
                                    <th>P</th>
                                    <th>W</th>
                                    <th>D</th>
                                    <th>L</th>
                                    <th>POINTS +/-</th>
                                    <th>POINTS DIFF</th>
                                    <th>TRIES +/-</th>
                                    <th>TRY BONUS</th>
                                    <th>LOOSING BONUS</th>
                                    <th>POINTS</th>
                                </tr>
                            </thead>
                            <tbody>
                                {moreTeams.map(team => {
                                    return (
                                        <tr key={team.id}>
                                            <td>{team.position}</td>
                                            <td>
                                                <Link
                                                    o={`/team?${team.name}`}
                                                    onClick={() => teamChoise(team.id)}
                                                >
                                                    {team.name}
                                                </Link>
                                            </td>
                                            <td>{team.played}</td>
                                            <td>{team.won}</td>
                                            <td>{team.drawn}</td>
                                            <td>{team.lost}</td>
                                            <td>{team.points_for}/{team.points_against}</td>
                                            <td>{team.points_diff}</td>
                                            <td>{team.tries_for}/{team.tries_against}</td>
                                            <td>{team.try_bonus}</td>
                                            <td>{team.losing_bonus}</td>
                                            <td>{team.points}</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                }
            </div>
    )
}
