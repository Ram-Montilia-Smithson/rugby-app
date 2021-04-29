import React, { useEffect, useState } from 'react'
import "../scss/competition/competition.css"
import { Link } from "react-router-dom"
import Table from "../components/table";
import Fixtures from "../components/fixtures";
import { standings, fixtures } from "../utils/api/mockData";

// consider cases of no data and errors
// add explanations for use of page

export default function Competition({ id, matchChoice, teamChoice }) {

    const [name, setName] = useState("")
    const [tables, setTables] = useState([])
    const [season, setSeason] = useState(0)
    const [fixtureList, setFixtureList] = useState([])
    const [results, setResults] = useState([])
    const [teams, setTeams] = useState([])

    useEffect(() => {
        setName(standings(id).results.comp_name)
        setSeason(standings(id).results.season)
        setTables(standings(id).results.standings)
        tables.forEach(table => {
            table.teams.forEach(team => { setTeams(teams => [...teams, team])})
        })
        fixtures(id).results.forEach(result => {
            if (new Date(result.date).getTime() > new Date().getTime() || result.status === "First Half" || result.status === "Half Time" || result.status === "Second Half") {
                setFixtureList(fixtureList => [...fixtureList, result])
            }   
            else if (new Date(result.date).getTime()<new Date().getTime()) {
                setResults(results => [result, ...results])
            }
        })
        return () => {
            setName("")
            setSeason(0)
            setTables([])
            setFixtureList([])
            setResults([])
            setTeams([])
        }
    }, [id, tables])

    return (
        <div className="competition" >
            <div className="competition-header">
                <div className="competition-header-info">
                    <img className="header-logo" src={`${process.env.PUBLIC_URL}/images/comps/${name}.png`} alt={name}/>
                    <h1 className="header-name">{name.toUpperCase()}</h1>
                    <h1 className="header-name">{season}</h1>
                </div>
                <div className="competition-header-teams">
                    {teams.map(team => {
                        return (
                            <Link
                                className="competition-header-team-link"
                                to={`/team?${team.name}`}
                                onClick={() => teamChoice(team.id, fixtureList)}
                            >
                                <img className="competition-header-team-logo" src={`${process.env.PUBLIC_URL}/images/teams/${team.name}.png`} alt={team.name}/>
                                <div>{team.name.toUpperCase()}</div>
                            </Link>
                        )
                    })}
                </div>
            </div>
            <Table standings={tables} teamChoice={teamChoice} fixtures={fixtureList}/>
            <div className="fixtures">
                <h2>LAST RESULTS</h2>
                <Fixtures fixtureList={results} matchChoice={matchChoice} numberOfFixtures={6}/>
                <h2>UPCOMING FIXTURES</h2>
                <Fixtures fixtureList={fixtureList} matchChoice={matchChoice} numberOfFixtures={6}/>
            </div>
        </div>
    )
}