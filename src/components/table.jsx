import React, {useState, useEffect} from 'react'
import "../scss/competition/competition.css"
import { Link } from "react-router-dom"

export default function Table({standings, teamChoice, fixtures}) {

    const [tableName, setTableName] = useState([])
    const [teams, setTeams] = useState([])

    useEffect(() => {
        standings.forEach(table => {
            setTeams(teams => [...teams, table.teams])
            setTableName(tableName => [...tableName, table.table_name])
        });
        // return () => {
        //     setTeams([])
        //     setTableName([])
        // }
    }, [standings])

    return (
        <div className="tables">
            {teams.map((table, index) => {
                return (
                    <div className="table-container" key={index}>
                        <h2>{tableName[index].toUpperCase()} TABLE</h2>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>TEAM</th>
                                    <th>P</th>
                                    <th>W</th>
                                    <th>D</th>
                                    <th>L</th>
                                    <th>POINTS DIFF</th>
                                    <th>TRIES DIFF</th>
                                    <th>TRY BONUS</th>
                                    <th>LOOSING BONUS</th>
                                    <th>POINTS</th>
                                </tr>
                            </thead>
                            <tbody>
                                {table.map(team => {
                                    return (
                                        <tr
                                            className="table-team"
                                            key={team.id}>
                                            <td>
                                                <Link
                                                    className="team-link"
                                                    to={`/team?${team.name}`}
                                                    onClick={() => teamChoice(team.id, fixtures)}
                                                >
                                                    <img className="team-logo" src={`https://res.cloudinary.com/${process.env.REACT_APP_CLOUD_NAME}/image/upload/v1622033973/images/${team.id}.png`} alt={team.name}/>
                                                    <div>{team.name.toUpperCase()}</div>
                                                </Link>
                                            </td>
                                            <td>{team.played}</td>
                                            <td>{team.won}</td>
                                            <td>{team.drawn}</td>
                                            <td>{team.lost}</td>
                                            <td>{team.points_for - team.points_against}</td>
                                            <td>{team.tries_for - team.tries_against}</td>
                                            <td>{team.try_bonus}</td>
                                            <td>{team.losing_bonus}</td>
                                            <td>{team.points}</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                )
            })} 
        </div>
    )
}
