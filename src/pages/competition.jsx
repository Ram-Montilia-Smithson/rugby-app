import React, { useEffect, useState } from 'react'
import "../scss/competition/competition.css"
import { Link } from "react-router-dom"
import Table from "../components/table";
import Fixtures from "../components/fixtures";
import { standings, fixtures, TeamsByCompetitionSeason } from "../utils/api/mockData";

// consider cases of no data and errors
// add explanations for use of page

export default function Competition({ comp, matchChoice, teamChoice }) {

    const [tables, setTables] = useState([])
    const [fixtureList, setFixtureList] = useState([])
    const [results, setResults] = useState([])
    const [teams, setTeams] = useState([])

    useEffect(() => {
        setTeams(TeamsByCompetitionSeason(comp.id).results)
        setTables(standings(comp.id).results.standings)
        fixtures(comp.id).results.forEach(result => {
            if (new Date(result.date).getTime() > new Date().getTime() || result.status === "First Half" || result.status === "Half Time" || result.status === "Second Half") {
                setFixtureList(fixtureList => [...fixtureList, result])
            }   
            else if (new Date(result.date).getTime()<new Date().getTime()) {
                setResults(results => [result, ...results])
            }
        })
        return () => {
            // setTables([])
            // setFixtureList([])
            // setResults([])
            // setTeams([])
        }
    }, [comp])

    return (
        <div className="competition" >
            <div className="competition-header">
                <div className="competition-header-info">
                    <img className="header-logo" src={`https://res.cloudinary.com/${process.env.REACT_APP_CLOUD_NAME}/image/upload/v1622033973/images/${comp.id}.png`} alt={comp.name}/>
                    <h1 className="header-name">{comp.name.toUpperCase()}</h1>
                    <h1 className="header-name">{comp.season}</h1>
                </div>
                <div className="competition-header-teams">
                    {teams.length && teams.map(team => {
                        return (
                            <Link
                                className="competition-header-team-link"
                                to={`/team?${team.name}`}
                                onClick={() => teamChoice(team.id, fixtureList)}
                            >
                                <img className="competition-header-team-logo" src={`https://res.cloudinary.com/${process.env.REACT_APP_CLOUD_NAME}/image/upload/v1622033973/images/${team.id}.png`} alt={team.name}/>
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