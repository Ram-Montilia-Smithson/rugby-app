import React, { useEffect, useState } from 'react'
import "../scss/competition.css"
import Table from "../components/table";
import Fixtures from "../components/fixtures";
import { standings, fixtures } from "../utils/api/mockData";

// consider making competitionHeader.jsx component to show logo with comp_name in a nicer way and
// consider showing all logos of teams in a horizontal line, fetched by  `https://rugby-live-data.p.rapidapi.com/teams/${id}/2021`
// these logos will also connect you to team's page
// consider cases of no data and errors
// add future matches
// maybe change the grid to six boxes
// add explanations for use of page

export default function Competition({ id, matchChoice, teamChoice }) {

    const [name, setName] = useState("")
    const [table, setTable] = useState([])
    const [season, setSeason] = useState(0)
    // const [info, setInfo] = useState({})
    const [fixtureList, setFixtureList] = useState([])
    const [results, setResults] = useState([])

    const time = new Date()

    useEffect(() => {
        setName(standings(id).results.comp_name)
        setSeason(standings(id).results.season)
        setTable(standings(id).results.standings)
        console.log(time.getTime())
        fixtures(id).results.forEach(result => {
            if (new Date(result.date).getTime()>time.getTime()) {
                setFixtureList(fixtureList => [...fixtureList, result])
            }   
            if (new Date(result.date).getTime()<time.getTime()) {
                setResults(results => [result, ...results])
            }
        })
        return () => {
            setName("")
            setSeason(0)
            setTable([])
            setFixtureList([])
            setResults([])
            }
    }, [id])

    return (
        <div className="competition" >
            <div className="competition-header">
                <img className="header-logo" src={`${process.env.PUBLIC_URL}/images/comps/${name}.png`} alt={name}/>
                <h1 className="header-name">{name.toUpperCase()}</h1>
                <h1 className="header-name">{season}</h1>
            </div>
            {table.length && 
                <Table standings={table} teamChoice={teamChoice} futureFixtures={fixtureList} comp={name}/>
            }
            <div>
                <h2>UPCOMING FIXTURES</h2>
                <Fixtures fixtureList={fixtureList} matchChoice={matchChoice}/>
            </div>
            <div>
                <h2>LAST RESULTS</h2>
                <Fixtures fixtureList={results} matchChoice={matchChoice} />
            </div>
        </div>
    )
}